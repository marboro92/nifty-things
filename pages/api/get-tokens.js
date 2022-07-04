import { ThirdwebSDK } from '@thirdweb-dev/sdk'

export default async function handler(req, res) {
  // Connect to thirdweb SDK
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, 'rinkeby')

  const tokenAddress = process.env.NEXT_PUBLIC_FT_CONTRACT
  const contract = sdk.getToken(tokenAddress)

  switch (req.method) {
    case 'POST':
      const { address } = req.body

      try {
        const balance = await contract?.balanceOf(address)
        if (!balance) {
          const response = await contract?.transfer(address, 2)
          res.status(201).json(response)
        } else {
          res.status(403).json({ error: 'DAL already claimed' })
        }
      } catch (error) {
        res.status(500).json({ error })
        console.error(error)
      }
      break
  }
}
