import { configureAmplify } from '../utils/cognito'
import '../styles/globals.css'
import { ArtistUserProvider } from '../contexts/ArtistUserContext'
import { ArtistCollectionsProvider } from '../contexts/ArtistCollectionsContext'

configureAmplify()

function MyApp({ Component, pageProps }) {
  return (
    <ArtistUserProvider>
      <ArtistCollectionsProvider>
        <Component {...pageProps} />
      </ArtistCollectionsProvider>
    </ArtistUserProvider>
  )
}

export default MyApp
