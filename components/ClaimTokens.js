import { Button } from './buttons'

const ClaimTokens = ({ address }) => {
  const getTokens = async () => {
    const response = await fetch('/api/get-tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }),
    })
  }
  return <Button onClick={getTokens}>Claim Your Dalmations</Button>
}

export default ClaimTokens
