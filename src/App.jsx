import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GamePage from './components/GamePage'
import StartPage from './components/StartPage'

function App() {
  const [count, setCount] = useState(0)
  const [isGameRunning,setIsGameRunning] = useState(false)

  return (
    <>
    <button onClick={() => setIsGameRunning(!isGameRunning)}>Swap Views</button>
      {!isGameRunning
      ? <StartPage />
      : <GamePage />
      }
    </>
  )
}

export default App
