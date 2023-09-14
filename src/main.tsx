<head>
  
</head>
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://jasonplato.github.io/my-twa/tonconnect-manifest.json';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WebAppProvider
    options={{
      smoothButtonsTransition: true,
    }}
  >
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <App />
    </TonConnectUIProvider>
  </WebAppProvider>,
  
)
