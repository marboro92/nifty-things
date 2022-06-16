import { useWeb3React } from '@web3-react/core'
import { Button } from '../buttons'
import { injected } from '../../utils/wallet-connector'

export const ConnectButton = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React()

  const connect = async () => {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  const disconnect = async () => {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div>
      {active ? (
        <>
          <span className="mr-2">
            Connected with <b>{account}</b>
          </span>
          <Button onClick={disconnect}>Disconnect</Button>
        </>
      ) : (
        <Button onClick={connect}>Connect Wallet</Button>
      )}
    </div>
  )
}
