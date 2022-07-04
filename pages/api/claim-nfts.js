import { ThirdwebSDK } from '@thirdweb-dev/sdk'

export default async function handler(req, res) {
  // Connect to thirdweb SDK
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, 'rinkeby')

  const nftCollectionAddress = process.env.NEXT_PUBLIC_SMART_CONTRACT
  const nftCollection = sdk.getNFTCollection(nftCollectionAddress)

  switch (req.method) {
    case 'POST':
      const { id, address } = req.body

      try {
        const response = await nftCollection?.transfer(address, id)

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
