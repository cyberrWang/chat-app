import React, { useState, useEffect, useContext } from 'react'
import { auth, signInWithGoogle, db } from './firebase' 
import { onAuthStateChanged } from "firebase/auth"
import { collection, getDocs, addDoc, serverTimestamp, orderBy, query } from "firebase/firestore"

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');

  const logGoogleUser = async () => {
    await signInWithGoogle();
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [])

  const getMessages = async () => {
    const ref = collection(db, 'messages');
    const q = query(ref, orderBy('time'));
    const response = await getDocs(q);
    setMessages(response.docs.map(doc => doc.data()));
  }

  useEffect(() => {
    getMessages();
  }, [user])

  const sendMsg = async (e) => {
    e.preventDefault();
    if (newMsg.trim() === '') {
      return
    }
    const { photoURL, uid } = user;
    await addDoc(collection(db, 'messages'), {
      text: newMsg,
      photoURL,
      uid,
      time: serverTimestamp()
    })
    setNewMsg('');
    getMessages();
  }

  return (
    <AppContext.Provider
      value={{
        user,
        logGoogleUser,
        messages,
        newMsg,
        setNewMsg,
        sendMsg,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export {AppProvider}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
