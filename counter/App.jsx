import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)

  const addValue = () => {
   counter=counter+1
   setCounter(counter)
  }
  const remValue = () => {
    counter = counter-1
    setCounter(counter)
  }


  return (
  <>
  <h1>Counter cha program aahe bhadwya</h1>
  <h2>Counter value : {counter}</h2>
  <button onClick={addValue}>
    Vadhav counter {counter}
  </button>
  <br/>
  <button  onClick={remValue}>
   Kami kr counter {counter}</button>
  </>


  )
}

export default App
