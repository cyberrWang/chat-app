import React from 'react'
import SignIn from './components/SignIn'
import Chat from './components/Chat'
import { useGlobalContext } from './context'
import './App.css'

const App = () => {
  const { user } = useGlobalContext();

  return (
    <main className='main'>
      { user ? <Chat /> : <SignIn /> }
    </main>
  )
}

export default App

