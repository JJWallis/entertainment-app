import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { initializeApp } from 'firebase/app'
import {
   GoogleAuthProvider,
   signInWithPopup,
   getAuth,
   signOut,
   onAuthStateChanged,
   User,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import type { NextPage } from 'next'
import { useState } from 'react'

const firebaseConfig = {
   apiKey: 'AIzaSyDx_kn46INkGKiWgWdYtm5ZidPsKEuCAzM',
   authDomain: 'user-posting.firebaseapp.com',
   projectId: 'user-posting',
   storageBucket: 'user-posting.appspot.com',
   messagingSenderId: '145234245102',
   appId: '1:145234245102:web:c598d9bbc1fe7bc382caff',
   measurementId: 'G-J3EVYNZMJ8',
}

// https://firebase.google.com/docs/web/setup#available-libraries

interface UserState {
   isLoggedIn: boolean
   user: User | null
}

const Home: NextPage = () => {
   const app = initializeApp(firebaseConfig)
   const auth = getAuth(app)
   const provider = new GoogleAuthProvider()
   const [{ isLoggedIn, user }, setUser] = useState<UserState>({
      isLoggedIn: false,
      user: null,
   })

   // onAuthStateChanged(auth, (user) => {
   //    if (user) setUser({ isLoggedIn: true, user })
   //    else setUser({ isLoggedIn: false, user: null })
   // })

   return (
      <main className="main">
         {isLoggedIn ? (
            <section id="when-signed-in" hidden>
               <div id="user-details"></div>
               <button id="sign-out-btn" onClick={() => signOut(auth)}>
                  Sign Out
               </button>
               <p>{user?.displayName}</p>
            </section>
         ) : (
            <section id="when-signed-out">
               <button
                  id="sign-in-btn"
                  onClick={() => signInWithPopup(auth, provider)}
               >
                  Sign In
               </button>
            </section>
         )}
      </main>
   )
}

export default Home
