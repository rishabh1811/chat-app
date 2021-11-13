import { onAuthStateChanged } from '@firebase/auth'
import Head from 'next/head'
import { useState } from 'react'
import Chatapp from '../components/ChatApp'
import SignIn from '../components/SignIn'
import { auth } from '../lib/firebaseConfig'

export default function Home() {

  const [user, setUser] = useState(undefined)

  onAuthStateChanged(auth, (usr) => {
    setUser(usr)
  })

  return (<>
    {user ? <Chatapp user={user}/> : <SignIn />}


  </>)
}
