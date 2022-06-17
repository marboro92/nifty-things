import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

import { configureAmplify } from '../utils/cognito'
import '../styles/globals.css'
import { ArtistUserProvider } from '../contexts/ArtistUserContext'
import { ArtistCollectionsProvider } from '../contexts/ArtistCollectionsContext'

// import { Web3Auth } from '@web3auth/web3auth'
// import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base'
// import RPC from '../utils/evm'

configureAmplify()

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Rinkeby}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: process.env.NEXT_PUBLIC_OPENZEP_RELAYER_URL,
          },
        },
      }}
    >
      <ArtistUserProvider>
        <ArtistCollectionsProvider>
          <Component {...pageProps} />
        </ArtistCollectionsProvider>
      </ArtistUserProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
