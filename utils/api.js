import { API_BASE_URL } from '../constants/api'
import { MOCK_ARTIST_SEARCH } from '../mock-data/mock-artist-search'
import { MOCK_COLLECTIONS } from '../mock-data/mock-collections'
import { MOCK_LABEL_SEARCH } from '../mock-data/mock-label-search'
import { getToken } from './cognito'

/**
 * getCollection returns a list of all collections
 * @param artistId a string id for the specific artist
 * @returns an object of private and public collections
 */

export const getCollections = async (artistId) => {
  // TODO: replace with new endpoint
  // const transfromCollectionList = (collectionList) =>
  //   collectionList?.map(({ releaseId, releaseTitle, ...item }) => ({
  //     id: releaseId,
  //     title: releaseTitle,
  //     ...item,
  //   }))

  // //  temporarily fill in some missing data  on the BE with FE mock data
  // const fillInMockData = (collections) =>
  //   collections.map((item, i) => ({
  //     ...(MOCK_COLLECTIONS[i] ? MOCK_COLLECTIONS[i] : MOCK_COLLECTIONS[0]),
  //     ...item,
  //   }))
  // const response = await fetch(
  //   `${API_BASE_URL}artistProfile/${artistId}/releases`
  // )
  // const data = await response.json()
  // return {
  //   public: fillInMockData(transfromCollectionList(data?.public)),
  //   private: fillInMockData(transfromCollectionList(data?.private)),
  // }
  return MOCK_COLLECTIONS
}

/**
 * initiateProfileClaim sends an email with a verification code to the
 * artist and returns whether this was successful or errors
 * @param id a string id for the specific artist profile being claimed
 * @returns an object of private and public collections
 */
export const initiateProfileClaim = async (id) => {
  if (!process.env.NEXT_PUBLIC_MOCK_COGNITO) {
    const token = await getToken()
    const response = await fetch(
      `https://wumata79tb.execute-api.us-east-1.amazonaws.com/dev/artistProfile/claim/initiate/${id}`,
      {
        method: 'PUT',
        authorization: token,
      }
    )
    const data = await response.json()
    return data
  }
}

/**
 * checkVerificationCode checks the code for artist profile verification
 * @param code a 4 digit code inputted by the user
 * @returns returns wherther the the cide verification what successful
 */
export const checkVerificationCode = async (code) => {
  if (!process.env.NEXT_PUBLIC_MOCK_COGNITO) {
    const response = await fetch(
      `${API_BASE_URL}artistProfile/claim/attempt/${code}`,
      { method: 'PUT' }
    )
    const data = await response.json()
    return data
  }
}

/**
 * getProfileSearchResults searches for profiles the user can claim
 * @param search a string search term
 * @param type the user type, artist or label (captured in get-access)
 * @returns returns a list of search results
 */
export const getProfileSearchResults = async (search, type) => {
  // uncomment to use mock data
  return (type === 'label' ? MOCK_LABEL_SEARCH : MOCK_ARTIST_SEARCH).records
}
