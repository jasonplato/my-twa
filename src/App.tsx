import './App.css'
import '@twa-dev/sdk';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import  WebApp from "@twa-dev/sdk";
import { MainButton } from '@twa-dev/sdk/react';

// import { useSenderAddr } from './hooks/useSenderAddr';
// import { useCounterContract } from './hooks/useCounterContract';

function App() {
  // const { value, address, sendIncrement } = useCounterContract();
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
            WebApp.sendData("confirm" + useTonAddress());
          }}
        />
      </div>
    </div>
  )
}

export default App
