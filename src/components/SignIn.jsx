import React from 'react'
import Button from '@mui/material/Button'
import { useGlobalContext } from '../context'

const SignIn = () => {
  const { logGoogleUser } = useGlobalContext();

  return (
    <div>
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
