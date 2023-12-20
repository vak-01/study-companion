import { useState } from 'react'
import LandingPage from './Pages/LandingPage'
import Dashboard from './Pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LandingPage/> */}
      <Dashboard/>
    </>
  )
}

export default App
