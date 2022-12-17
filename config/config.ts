import { environments } from './environments'

const defaultConfig = {
  // Application
  env: process.env.NODE_ENV || environments.development,
  network: process.env.NETWORK || 'Polygon',
  chainId: process.env.CHAIN_ID || '0x89',
  currency: process.env.CURRENCY || 'MATIC',
  contractAddress: process.env.CONTRACT_ADDRESS || '',

  // Blockchain
  blockExplorerUrl: process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL || 'https://mumbai.polygonscan.com',
}

export const config: typeof defaultConfig = defaultConfig
