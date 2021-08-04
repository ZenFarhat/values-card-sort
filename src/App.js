import './styles/style.css'
import Login from './components/Login'
import { useState } from 'react'
import Screen1 from './components/Screen1'
import { LoginContext } from './Contexts/LoginContext'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <div className='App'>
      <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        {isLoggedIn ? <Screen1 /> : <Login />}
      </LoginContext.Provider>
    </div>
  )
}

export default App
