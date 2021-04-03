import { ConnextModal } from '@connext/vector-modal'
import { useEthers } from '@usedapp/core'

export default function Modal() {
  const { account, library } = useEthers()

  return (
    <ConnextModal
      showModal={true}
      onClose={() => "setShowConnext(false)"}
      onReady={params => console.log('MODAL IS READY =======>', params)}
      withdrawalAddress={account}
      routerPublicIdentifier="vector892GMZ3CuUkpyW8eeXfW2bt5W73TWEXtgV71nphXUXAmpncnj8"
      depositAssetId={'0x6b175474e89094c44da98b954eedeac495271d0f'}
      depositChainProvider="https://mainnet.infura.io/v3/5e378f49a3994737940a897b2d95222b"
      withdrawAssetId={'0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'}
      withdrawChainProvider="https://rpc-mainnet.maticvigil.com"
    />
  )
}
