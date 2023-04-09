import React from 'react'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import { useGlobalContext } from '../context'

const SendMessage = () => {
  const { newMsg, setNewMsg, sendMsg } = useGlobalContext();

  return (
    <form onSubmit={sendMsg} className='send-container'>
      <Input
        className='input'
        placeholder='Message...' 
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
      />  
      <Button type='submit' endIcon={<SendIcon />}>SEND</Button>
    </form>
  )
}

export default SendMessage
