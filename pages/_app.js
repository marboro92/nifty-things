import { configureAmplify } from '../utils/cognito'
import '../styles/globals.css'
import { ArtistUserProvider } from '../contexts/ArtistUserContext'
import { ArtistCollectionsProvider } from '../contexts/ArtistCollectionsContext'
import LogRocket from 'logrocket'

if (process.env.NEXT_PUBLIC_ENV !== 'local') {
  LogRocket.init('rnmr6s/nifty')
}

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
