import { configureAmplify } from '../utils/cognito'
import '../styles/globals.css'
import { ArtistUserProvider } from '../contexts/ArtistUserContext'

if (process.env.NEXT_PUBLIC_MOCK_COGNITO) {
  configureAmplify()
}

function MyApp({ Component, pageProps }) {
  return (
    <ArtistUserProvider>
      <Component {...pageProps} />
    </ArtistUserProvider>
  )
}

export default MyApp
