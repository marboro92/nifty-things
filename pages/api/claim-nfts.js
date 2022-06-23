import { ThirdwebSDK } from '@thirdweb-dev/sdk'

import abi from '../../contracts/ThirdWebCollection-abi.json'
import { ethers } from 'ethers'

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const { id, address } = req.body

      try {
        const provider = ethers.getDefaultProvider(
          process.env.NEXT_PUBLIC_NETWORK
        )
        const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
        const nftContract = new ethers.Contract(
          process.env.NEXT_PUBLIC_SMART_CONTRACT,
          abi,
          signer
        )
        console.log('Transation initialized...')
        let nftTxn = await nftContract.transferFrom(
          process.env.NEXT_PUBLIC_DEFAULT_OWNER,
          address,
          id
        )
        console.log('In progress... please wait')
        const response = await nftTxn.wait()
        console.log(
          `Done! See transaction: https: ${NETWORK}.etherscan.io/${nftTxn.hash}`
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
