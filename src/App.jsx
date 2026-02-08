import { useState } from 'react'
import './App.css'
import LandingPage from './Pages/landingPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <LandingPage />
    </main>
  )
}

export default App
