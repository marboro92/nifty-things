import { abi } from '../../contracts/NFTCollectible.json'

import { ethers } from 'ethers'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
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
        const tokens = await nftContract.tokensOfOwner(
          process.env.NEXT_PUBLIC_DEFAULT_OWNER
        )
        const tokenData = await Promise.all(
          tokens.map(async (_, i) => {
            const response = await fetch(
              `https://ipfs.io/ipfs/${process.env.IPFS_KEY}/${i}`
            )
            if (!response.ok) throw new Error(response.statusText)
            const json = await response.json()
            return {
              metadata: json,
              id: i,
              owner: process.env.NEXT_PUBLIC_DEFAULT_OWNER,
            }
          })
        )
        res.status(201).json(tokenData)
      } catch (error) {
        res.status(500).json({ error })
        console.error(error)
      }
      break

    default:
      res.status(200).json(nfts)
  }
}
