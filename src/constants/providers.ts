import { JsonRpcProvider } from '@ethersproject/providers'

import { NETWORK_URLS, SupportedChainId } from './chains'

export const Providers = {
  [SupportedChainId.MAINNET]: new JsonRpcProvider(NETWORK_URLS[SupportedChainId.MAINNET]),
  [SupportedChainId.RINKEBY]: new JsonRpcProvider(NETWORK_URLS[SupportedChainId.RINKEBY]),
  [SupportedChainId.BSC]: new JsonRpcProvider(NETWORK_URLS[SupportedChainId.BSC]),
  [SupportedChainId.POLYGON]: new JsonRpcProvider(NETWORK_URLS[SupportedChainId.POLYGON]),
  [SupportedChainId.FANTOM]: new JsonRpcProvider(NETWORK_URLS[SupportedChainId.FANTOM]),
}
