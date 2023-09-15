import './App.css'
import '@twa-dev/sdk';
import { TonConnectButton } from '@tonconnect/ui-react';
// import { useTonConnect } from './hooks/useTonConnect';
import  WebApp from "@twa-dev/sdk";
import { BackButton, MainButton } from '@twa-dev/sdk/react';

// import { useSenderAddr } from './hooks/useSenderAddr';
// import { useCounterContract } from './hooks/useCounterContract';

function App() {
  // const { sender } = useTonConnect();
  // const { value, address, sendIncrement } = useCounterContract();
  WebApp.showAlert("Hey there!");
  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />
        <BackButton
            onClick={() => {
              WebApp.sendData("back  button");
              window.history.back()

            }}
        />
        <MainButton 
          text="Click Main"
          onClick={() => {
            WebApp.sendData("main button");
            alert("test hello from main button");
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
