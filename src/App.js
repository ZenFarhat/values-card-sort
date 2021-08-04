import './styles/style.css'
import Login from './components/Login'
import { useState } from 'react'
import Screen1 from './components/Screen1'
import { LoginContext } from './Contexts/LoginContext'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App'>
        <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
          {isLoggedIn ? <Screen1 /> : <Login />}
        </LoginContext.Provider>
      </div>
    </DndProvider>
  )
}

export default App
