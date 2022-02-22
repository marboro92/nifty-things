import Collection from '../../components/artists/Collection'
import H1 from '../../components/typography/H1'

const MOCK_COLLECTIONS = [
  {
    title: 'Metamorphosis',
    date: `January 11th, 2022`,
    type: 'EP',
    coverImgSrc: '/artists/artist-intro-1.jpg',
    trackList: [
      { title: 'Covered Tears' },
      { title: 'Covered Tears' },
      { title: 'Covered Tears' },
    ],
  },
]

const LandingPage = () => {
  return (
    <div className="h-full mx-2 my-2 md:mx-5 md:my-3">
      <H1>Profile</H1>
      {MOCK_COLLECTIONS.map(({ title, date, type, coverImgSrc, trackList }) => (
        <Collection
          key={title + date}
          title={title}
          date={date}
          type={type}
          coverImgSrc={coverImgSrc}
          trackList={trackList}
        />
      ))}
    </div>
  )
}

export default LandingPage
