import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

import { configureAmplify } from '../utils/cognito'
import '../styles/globals.css'
import { CreatorUserProvider } from '../contexts/CreatorUserContext'
import { CreatorCollectionsProvider } from '../contexts/CreatorCollectionsContext'

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
      <CreatorUserProvider>
        <CreatorCollectionsProvider>
          <Component {...pageProps} />
        </CreatorCollectionsProvider>
      </CreatorUserProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
