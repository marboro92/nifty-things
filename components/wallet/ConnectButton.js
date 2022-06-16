import { useMetamask, useDisconnect, useAddress } from '@thirdweb-dev/react'
import { Button } from '../buttons'

export const ConnectButton = () => {
  const connectWithMetamask = useMetamask()
  const disconnect = useDisconnect()
  const address = useAddress()

  return (
    <div>
      {address ? (
        <>
          <span className="mr-2">
            Connected with <b>{address}</b>
          </span>
          <Button onClick={disconnect}>Disconnect</Button>
        </>
      ) : (
        <Button onClick={connectWithMetamask}>Connect Wallet</Button>
      )}
    </div>
  )
}
