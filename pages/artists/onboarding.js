import { useRouter } from 'next/router'
import { ROUTES } from '../../constants/artists-routes'
import { useArtistUser } from '../../contexts/ArtistUserContext'
import { useEffect, useState } from 'react'
import FindProfile from '../../components/artists/FindProfile'
import { PlaceholderAvatar } from '../../components/icons'
import ProfileExistsError from '../../components/artists/ProfileExistsError'
import _debounce from 'lodash.debounce'
import SomethingWentWrong from '../../components/artists/SomethingWentWrong'
import VerifyProfile from '../../components/artists/VerifyProfile'
import {
  checkVerificationCode,
  getProfileSearchResults,
  initiateProfileClaim,
} from '../../utils/api'

const SearchResult = ({ children, imgSrc }) => (
  <span className="flex items-center text-neutral">
    <div className="relative mr-2 h-[4rem] w-[4rem] rounded-full overflow-hidden">
      <PlaceholderAvatar className="mr-2 h-[4rem] w-[4rem]" />
      {imgSrc && (
        <img
          className="absolute top-[0] right-[0] h-[4rem] w-[4rem] "
          src={imgSrc}
        />
      )}
    </div>
    {children}
  </span>
)

const OnboardingPage = () => {
  const [{ type, cognitoUser }] = useArtistUser()
  const [search, setSearch] = useState(null)
  const [profile, setProfile] = useState()
  const [userList, setUserList] = useState()
  const [loading, setLoading] = useState(false)
  const [showProfileClaimedError, setShowProfileClaimedError] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const router = useRouter()

  const searchResults =
    search && search.length > 0 && !profile && userList?.length > 0
      ? userList.map((item) => ({
          id: item[type === 'label' ? 'labelID' : 'artistProfileId'],
          name: item[type === 'label' ? 'name' : 'artistName'],
          content: (
            <SearchResult imgSrc={item?.profilePicture}>
              {item[type === 'label' ? 'name' : 'artistName']}
            </SearchResult>
          ),
        }))
      : []

  useEffect(() => {
    if (!cognitoUser) router.push(ROUTES.GET_ACCESS)
  })

  const handleChangeSearch = _debounce(async (search, type) => {
    const results = await getProfileSearchResults(search, type)
    setLoading(false)
    setUserList(results)
  }, 300)

  useEffect(() => {
    if (search) {
      setLoading(true)
      handleChangeSearch(search, type)
    }
  }, [search, type])

  const onSelectProfile = (item) => {
    setProfile(item)
    setSearch(item.name)
  }

  const proceedToVerify = () => {
    setShowVerification(true)
  }

  const claimProfile = async () => {
    try {
      resetErrors()
      await initiateProfileClaim('0c0a60c2-0184-4dd5-8383-615e41238908')
      proceedToVerify()
    } catch (e) {
      if (e.message == 'Artist Profile Already Claimed.') {
        setShowProfileClaimedError(true)
      } else {
        setShowError(true)
      }
    }
  }

  const resetErrors = () => {
    setShowProfileClaimedError(false)
    setShowError(false)
  }

  const checkCode = async (code) => {
    try {
      setLoading(true)
      await checkVerificationCode(code)
      await router.push(ROUTES.PROFILE_CLAIMED)
    } catch (e) {
      //TODO: handle mismatch or other errors
      setShowError()
    }
    setLoading(false)
  }

  if (showProfileClaimedError) {
    return (
      <ProfileExistsError
        name={profile.name}
        userType={type}
        onBack={resetErrors}
      />
    )
  }

  if (showError) {
    return <SomethingWentWrong onBack={resetErrors} />
  }

  if (showVerification) {
    return (
      <VerifyProfile userType={type} onSubmit={checkCode} loading={loading} />
    )
  }

  return (
    <FindProfile
      userType={type}
      onBack={() => router.push(ROUTES.GET_ACCESS)}
      onNext={profile ? claimProfile : undefined}
      onChangeSearch={(e) => {
        setProfile(null)
        setSearch(e.target.value)
      }}
      hideDropdown={profile}
      loading={loading}
      searchValue={search || ''}
      searchResults={searchResults}
      onSelectProfile={onSelectProfile}
    />
  )
}

export default OnboardingPage
