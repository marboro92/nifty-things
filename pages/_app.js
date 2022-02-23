import { configureAmplify } from '../utils/cognito'
import '../styles/globals.css'
import { ArtistUserProvider } from '../contexts/ArtistUserContext'
import { ArtistCollectionsProvider } from '../contexts/ArtistCollectionsContext'

if (process.env.NEXT_PUBLIC_MOCK_COGNITO) {
  configureAmplify()
}

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
