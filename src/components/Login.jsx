import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

function Login() {
  const { setLoggedIn } = useContext(LoginContext)

  return (
    <div className='login'>
      <form
        className='login__form'
        onSubmit={() => {
          setLoggedIn(true)
        }}
      >
        <h1 className='login__header'>Welcome</h1>
        <label className='login__label'>
          First Name
          <input type='text' className='login__input' required />
        </label>
        <label className='login__label'>
          Last Name
          <input type='text' className='login__input' required />
        </label>
        <button className='login__btn'>Start</button>
      </form>
    </div>
  )
}

export default Login
