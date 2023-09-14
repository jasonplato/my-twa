import './App.css'
import '@twa-dev/sdk';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { MainButton } from "@vkruglikov/react-telegram-web-app";
import { BackButton } from '@twa-dev/sdk/react';

// import { useSenderAddr } from './hooks/useSenderAddr';
// import { useCounterContract } from './hooks/useCounterContract';

function App() {
  const { sender } = useTonConnect();
  // const { value, address, sendIncrement } = useCounterContract();
  
  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />
        <div className='Card'>
          <MainButton
              text="CLICK ME"
              onClick={() => {
                console.log("test hello", sender);
              }}
          />
        </div>
        <div className='Card'>
          <BackButton
              onClick={() => {
                console.log("test hello");
              }}
          />
        </div>
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
