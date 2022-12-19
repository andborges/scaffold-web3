import { environments } from './environments'

const defaultConfig = {
  // Application
  env: process.env.NODE_ENV || environments.development,

  // Blockchain
  network: process.env.NETWORK || 'Polygon',
  chainId: process.env.CHAIN_ID || '0x89',
  currency: process.env.CURRENCY || 'MATIC',
  contractAddress: process.env.CONTRACT_ADDRESS || '',
  blockExplorerUrl: process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL || 'https://mumbai.polygonscan.com',
  pinataKey: process.env.PINATA_KEY || '',
  pinataSecret: process.env.PINATA_SECRET || '',
}

export const config: typeof defaultConfig = defaultConfig
