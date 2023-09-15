import './App.css'
import '@twa-dev/sdk';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import  WebApp from "@twa-dev/sdk";
import { MainButton } from '@twa-dev/sdk/react';

// import { useSenderAddr } from './hooks/useSenderAddr';
import { useCounterContract } from './hooks/useCounterContract';

function App() {
  // const { connected } = useTonConnect();
  const { getWallerAddr } = useCounterContract();
  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />
    
        <MainButton 
          text="Confirm"
          onClick={() => {
            // const wallet = useTonWallet();
            // if (wallet == null) {
            //   WebApp.sendData("main button" + " null");
            // }
            // else {
            //   WebApp.sendData("main button" + wallet.account);
            // }
            WebApp.sendData(getWallerAddr());
          }}
        />
      </div>
    </div>
  )
}

export default App
