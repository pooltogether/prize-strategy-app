import '../styles/globals.css'
import { DAppProvider, ChainId } from '@usedapp/core'
import { getChain } from 'evm-chains'

const config = {
  readOnlyChain: 137,
  readOnlyUrls: {
    // [ChainId.Mainnet]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
    [137]: getChain(137).rpc[0]
  },
  supportedChains: [137],
  multicallAddresses: {
    [137]: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  )
}

export default MyApp
