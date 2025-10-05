import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'

export const projectId = import.meta.env.VITE_PROJECT_ID || "162f061fcc08eee3ed1840ff1717d8ef"

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const metadata = {
  name: 'Orynth Website Builder',
  description: 'Orynth Website Builder with Solana Support',
  url: 'https://orynth.com',
  icons: ['https://orynth.com/icon.png']
}

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [solana, solanaTestnet, solanaDevnet]

export const solanaWeb3JsAdapter = new SolanaAdapter()