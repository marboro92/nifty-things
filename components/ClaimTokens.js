import { useState } from 'react'
import { Button } from './buttons'

const ClaimTokens = ({ address }) => {
  const [loading, setLoading] = useState(false)
  const getTokens = async () => {
    setLoading(true)
    const response = await fetch('/api/get-tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }),
    })
    console.log(response)
    setLoading(false)
  }
  return (
    <Button onClick={getTokens} loading={loading}>
      Claim Your Dalmations
    </Button>
  )
}

export default ClaimTokens
