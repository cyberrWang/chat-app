import React from 'react'
import Button from '@mui/material/Button'
import { signOutWithGoogle } from '../firebase'

const SignOut = () => {
  const quitGoogleUser = async () => {
    await signOutWithGoogle()
  }

  return (
    <div className='out-btn-container'>
      <Button
        variant='contained'
        onClick={quitGoogleUser}
      >
        sign out
      </Button>
    </div>
  )
}

export default SignOut
