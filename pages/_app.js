import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

import { configureAmplify } from '../utils/cognito'
import '../styles/globals.css'
import { ArtistUserProvider } from '../contexts/ArtistUserContext'
import { ArtistCollectionsProvider } from '../contexts/ArtistCollectionsContext'

configureAmplify()

const getLibrary = (provider) => {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
        <ArtistUserProvider>
          <ArtistCollectionsProvider>
            <Component {...pageProps} />
          </ArtistCollectionsProvider>
        </ArtistUserProvider>
      </ThirdwebProvider>
    </Web3ReactProvider>
  )
}

export default MyApp
