import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GamePage from './components/GamePage'
import StartPage from './components/StartPage'

function App() {
  const [count, setCount] = useState(0)
  const [isGameRunning,setIsGameRunning] = useState(false)
  const [username,setUsername] = useState('')
  const [difficultyOptions,setDifficultyOptions] = useState([
    {
        id: 0,
        imgPath: '/img0.jpg',
        title: 'First Option'
    },
    {
        id: 1,
        imgPath: '/img1.jpg',
        title: 'Second Option'
    },
    {
        id: 2,
        imgPath: '/img2.jpg',
        title: 'Third Option'
    }
    ]);
  const [difficultyChoice,setDifficultyChoice] = useState();
  const [isPlayerReady,setIsPlayerReady] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsGameRunning(!isGameRunning)}
      >
        Swap Views
      </button>
      {!isGameRunning
        ? <StartPage 
          username={username}
          setUsername={setUsername}
          difficultyChoice={difficultyChoice}
          setDifficultyChoice={setDifficultyChoice}
          difficultyOptions={difficultyOptions}
          setDifficultyOptions={setDifficultyOptions}
          isPlayerReady={isPlayerReady}
          setIsPlayerReady={setIsPlayerReady}
        />
        : <GamePage />
      }
    </>
  )
}

export default App
