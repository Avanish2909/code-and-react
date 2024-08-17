
// import Chai from "./Chai"
import { useState } from "react";

function App() {

  //useState .... used for updation on UI component
  // [value, function()] = useState(inital value)
  const [counter, setCounter] = useState(5);

  // let counter = 5

  const addValue = () => {
    // counter += 1;

    //passing the value on updation area
    //by using funtion of useState...
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    // <Chai/>

    <>
      <h1>React and code</h1>
      <h1>Counter value: {counter}</h1>

      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
