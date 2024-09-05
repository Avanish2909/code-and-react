import { useState , useContext} from 'react'
import './App.css'
import Counter from './components/Counter';
import { ConterContext } from './context/Counter'
import Items from './components/Items';
import Cart from './components/Cart';

function App() {
  
  const counterState = useContext(ConterContext);

  console.log("context", counterState);

  return (
    <>
      <div>

        <Items name="MacBook Pro" price={100000} />
        <Items name="Pendrive" price={40000} />
        <Items name="Mobile" price={64500} />
        <Cart />

        {/* <h1>Count is {counterState.count}</h1>
        <Counter />
        <Counter /> */}
      </div>
    </>
  )
}

export default App
