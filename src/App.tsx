import './App.css'
import '@twa-dev/sdk';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
// import { useTonConnect } from './hooks/useTonConnect';
import  WebApp from "@twa-dev/sdk";
import { MainButton } from '@twa-dev/sdk/react';

// import { useSenderAddr } from './hooks/useSenderAddr';
// import { useCounterContract } from './hooks/useCounterContract';

function App() {
  // const { sender } = useTonConnect();
  // const { value, address, sendIncrement } = useCounterContract();
  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />
        {/* <BackButton
            onClick={() => {
              WebApp.sendData("back  button");
              window.close()
            }}
        /> */}
        <MainButton 
          text="Back"
          onClick={() => {
            WebApp.sendData("main button" + useTonWallet()?.account);
            window.close()
          }}
        />
        
        {/* <div className='Card'>
          <b>Counter Address</b>
          <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{value ?? 'Loading...'}</div>
        </div>

        <a
          className={`Button ${connected ? 'Active' : 'Disabled'}`}
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </a> */}
      </div>
    </div>
  )
}

export default App
