import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import FormData from 'form-data'
const fs = require('fs')

const mintFile = (file) => {
  var data = new FormData()
  data.append('file', fs.createReadStream('/Users/Desktop/images/cat.JPG'))
  data.append('pinataOptions', '{"cidVersion": 1}')
  data.append(
    'pinataMetadata',
    '{"name": "MyFile", "keyvalues": {"company": "Pinata"}}'
  )
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: '89544e03a00461e10fc0',
      pinata_secret_api_key:
        '0fda1929549c64c460aed8922e7bc039fc98435d32e40aae015b3843a3088f88',
    },
    body: JSON.stringify({ file }),
  })
}

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const { name, description, image, address } = req.body

      try {
        // Connect to thirdweb SDK
        const sdk = ThirdwebSDK.fromPrivateKey(
          process.env.PRIVATE_KEY,
          'rinkeby'
        )

        const nftCollectionAddress = process.env.NEXT_PUBLIC_SMART_CONTRACT
        const nftCollection = sdk.getNFTCollection(nftCollectionAddress)
        mintFile(image)
        const nft = await nftCollection?.mintTo(address, {
          name,
          description,
          image:
            'https://gateway.pinata.cloud/ipfs/QmV8qougsq4FkFvp1tu1izsCZyozgPZCK2cmdfdpG6XxAC/7',
        })

        res.status(201).json(nft)
      } catch (error) {
        res.status(500).json({ error })
        console.error(error)
      }
      break

    default:
      res.status(200).json({})
  }
}
