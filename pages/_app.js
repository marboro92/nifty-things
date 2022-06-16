import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

import { configureAmplify } from '../utils/cognito'
import '../styles/globals.css'
import { ArtistUserProvider } from '../contexts/ArtistUserContext'
import { ArtistCollectionsProvider } from '../contexts/ArtistCollectionsContext'

configureAmplify()

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <ArtistUserProvider>
        <ArtistCollectionsProvider>
          <Component {...pageProps} />
        </ArtistCollectionsProvider>
      </ArtistUserProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
