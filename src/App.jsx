import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomePage from "./components/welcome-page"

// import dotenv from 'dotenv'
// dotenv.config()

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black h-screen w-screen'>
      <WelcomePage/>
    </div>
  )
}

export default App
