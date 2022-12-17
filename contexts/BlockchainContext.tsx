import React, { useEffect, useState } from 'react'
import { Contract, ethers } from 'ethers'

import contract from '../artifacts/contracts/Lock.sol/Lock.json'
import { config } from '../config/config'

const network = config.network || 'Polygon'
const chainId = config.chainId || '0x89'
const currency = config.currency || 'MATIC'
const contractAddress = config.contractAddress || '0x31AfD99Cd342D653a2c7761295B19B5b98BEC4ab'

const contractABI = contract.abi

type WindowInstanceWithEthereum = Window & typeof globalThis & { ethereum?: any }

export const BlockchainContext = React.createContext({
  isLoading: true,
  currency: currency,
  connectWallet: async () => {},
  walletMessage: '',
  currentAccount: '',
  getContract: {},
})

interface BlockchainProviderProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode
}

export const BlockchainProvider = ({ children }: BlockchainProviderProps) => {
  const [ethereum, setEthereum] = useState<any>()
  const [currentAccount, setCurrentAccount] = useState('')
  const [walletMessage, setWalletMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        setWalletMessage('Você não tem a MetaMask instalada no seu navegador')

        return false
      }

      const walletChainId = await ethereum.request({ method: 'eth_chainId' })

      if (walletChainId !== chainId) {
        setWalletMessage(`Por favor, altere a network da sua MetaMask para ${network}`)

        return false
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])

        return true
      }
    } catch (err) {
      console.log(err)
    }

    return false
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        setWalletMessage('Você não tem a MetaMask instalada no seu navegador')
        return
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      setCurrentAccount(accounts[0])

      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const getContract = (): Contract => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractABI, signer)

    return contract
  }

  useEffect(() => {
    setEthereum((window as WindowInstanceWithEthereum).ethereum)
  }, [])

  useEffect(() => {
    const checkWallet = async () => {
      setWalletMessage('')
      setCurrentAccount('')
      setIsLoading(true)

      const isConnected = await checkIfWalletIsConnected()

      if (isConnected) {
        // Do something
      }

      setIsLoading(false)
    }

    if (ethereum) {
      checkWallet()

      ethereum.on('accountsChanged', async () => {
        await checkWallet()
      })

      ethereum.on('chainChanged', async () => {
        await checkWallet()
      })
    }
  }, [ethereum])

  return (
    <BlockchainContext.Provider
      value={{
        isLoading,
        currency,
        connectWallet,
        walletMessage,
        currentAccount,
        getContract,
      }}
    >
      {children}
    </BlockchainContext.Provider>
  )
}
