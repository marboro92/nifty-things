export const claimNft = async (id, address) => {
  try {
    const { ethereum } = window
    if (ethereum) {
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

export const getAllAvailableNfts = async () => {
  try {
    const res = await fetch('/api/list-available-nfts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}
