import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ethers } from 'ethers'
import { useEthers, useContractCalls } from '@usedapp/core'
import { useState } from 'react'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import PeriodicPrizeStrategyAbi from '../abis/PeriodicPrizeStrategyAbi'
import { getChain } from 'evm-chains'

const PrizeStrategyInterface = new ethers.utils.Interface(PeriodicPrizeStrategyAbi)

function prizePool(prizeStrategyAddress) {
  return {
    abi: PrizeStrategyInterface,
    address: prizeStrategyAddress,
    method: 'prizePool',
    args: []
  }
}

function periodicPrizeStrategyListener(prizeStrategyAddress) {
  return {
    abi: PrizeStrategyInterface,
    address: prizeStrategyAddress,
    method: 'periodicPrizeStrategyListener',
    args: []
  }
}

export default function Home() {

  const {
    activate,
    activateBrowserWallet,
    account,
    deactivate,
    library,
    chainId
  } = useEthers()

  const [prizeStrategyAddress, setPrizeStrategyAddress] = useState('')
  const [listenerAddress, setListenerAddress] = useState('')

  const calls = prizeStrategyAddress ? [
    prizePool(prizeStrategyAddress),
    periodicPrizeStrategyListener(prizeStrategyAddress)
  ] : []

  const result = useContractCalls(calls)

  let prizePoolAddress, listener

  if (result.length) {
    [prizePoolAddress, listener] = result
  }

  async function updateListener(e) {
    e.preventDefault()

    let contract = new ethers.Contract(prizeStrategyAddress, PeriodicPrizeStrategyAbi, library.getSigner())
    await contract.setPeriodicPrizeStrategyListener(listenerAddress)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          {chainId ? <span>{getChain(chainId).name}&nbsp;</span> : ''}
          {account || 'Not Connected'}
        </p>

        <p>
          <button onClick={() => activateBrowserWallet()}>Connect MetaMask</button>
        </p>
        <p>
          {/* <button onClick={() => activate(walletconnect, (err) => console.error(err), false)}>Connect WalletConnect</button> */}
        </p>
        <p>
          <button onClick={() => deactivate()}>Disconnect</button>
        </p>

        <div>
          <h4>Enter Prize Strategy address:</h4>
          <input type='text' onChange={(e) => setPrizeStrategyAddress(e.target.value)} value={prizeStrategyAddress}></input>
        </div>

        <p>Prize Pool: {prizePoolAddress}</p>

        <form onSubmit={(e) => updateListener(e)}>
          <h4>Set PeriodicPrizeStrategyListener</h4>
          <input type='text' onChange={(e) => setListenerAddress(e.target.value)} value={listenerAddress}></input>
          <input type='submit' value='Update' />
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
