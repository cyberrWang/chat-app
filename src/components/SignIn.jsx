import React from 'react'
import Button from '@mui/material/Button'
import { useGlobalContext } from '../context'

const SignIn = () => {
  const { logGoogleUser } = useGlobalContext();

  return (
    <div className='signIn-btn-container'>
      <h2>chat with your friends</h2>
      <h2>sign in with your google account</h2>
      <Button
        variant='outlined'
        onClick={logGoogleUser}
      >
        sign in
      </Button>
    </div>
  )
}

export default SignIn
