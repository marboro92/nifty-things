// import contract from './contracts/NFTCollectible.sol'

// import abi from '../contracts/ThirdWebCollection-abi.json'

// const NETWORK = 'rinkeby'
// const CONTRACT_ADDRESS = '0x76101CA536bA8F5ab4DA9849F67164E8dD9C9BC7' // replace with third wbe
import { ethers } from 'ethers'
export const claimNft = async (id, address) => {
  try {
    const { ethereum } = window
    if (ethereum) {
      // const provider = new ethers.providers.Web3Provider(ethereum)
      // const signer = provider.getSigner()
      await fetch('/api/claim-nfts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, address }),
      })
    }
  } catch (e) {
    console.error(e)
  }
}
