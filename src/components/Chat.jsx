import React, {useRef, useEffect} from 'react'
import SignOut from './SignOut'
import SendMessage from './SendMessage'
import { useGlobalContext } from '../context'

const Chat = () => {
  const { messages, user } = useGlobalContext();
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth"});
  }, [messages])

  return (
    <div>
      <SignOut />
      <div className='msgs-container'>
        {messages && 
          messages.map((message, index) => {
            return (
              <div key={index} className={message.uid === user.uid ? 'msg user-msg': 'msg'}>
                <img
                  src={message.photoURL}
                  alt='photo'
                />
                <p>{message.text}</p>
              </div>
            )
          })
        }
      </div>
      <SendMessage />
      <div ref={scroll}></div>
    </div>
  )
}

export default Chat
