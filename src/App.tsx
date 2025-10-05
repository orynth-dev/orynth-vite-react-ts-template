import { createAppKit } from '@reown/appkit/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { metadata, projectId, solanaWeb3JsAdapter } from './config'

// Create modal
createAppKit({
  projectId,
  metadata,
  themeMode: 'light',
  networks: [solana, solanaTestnet, solanaDevnet],
  adapters: [solanaWeb3JsAdapter],
  features: {
    analytics: true
  },
  themeVariables: {
    '--w3m-accent': '#000000'
  }
})

export function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Orynth Website Builder</h2>
      <div className="z-[9999] relative">
        <appkit-button />
      </div>
      <p className="mt-8 text-gray-600">Your website builder components go here</p>
    </div>
  )
}

export default App
