import { ThirdwebSDK } from '@thirdweb-dev/sdk'

import abi from '../../contracts/ThirdWebCollection-abi.json'
import { ethers } from 'ethers'

const NETWORK = 'rinkeby'
// const CONTRACT_ADDRESS = '0x76101CA536bA8F5ab4DA9849F67164E8dD9C9BC7' //new

const CONTRACT_ADDRESS = '0x8556ac4a6c028CB1dfD1B16438eCFF9AD7BA6464'

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const { id, address } = req.body

      try {
        const provider = ethers.getDefaultProvider('rinkeby')
        const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
        const nftContract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer)
        console.log('Transation initialized...')
        let nftTxn = await nftContract.transferFrom(
          process.env.NEXT_PUBLIC_DEFAULT_OWNER,
          address,
          id
        )
        console.log('Mining... please wait')
        const response = await nftTxn.wait()
        console.log(
          `Mined, see transaction: https: ${NETWORK}.etherscan.io/${nftTxn.hash}`
        )
        res.status(201).json({
          payload: response?.payload,
          signature: response?.signature,
        })
      } catch (error) {
        res.status(500).json({ error })
        console.error(error)
      }
      break

    default:
      res.status(200).json(nfts)
  }
}
