import { signOut } from '@firebase/auth'
import React from 'react'
import { auth } from '../lib/firebaseConfig'


export default function Navbar({user}) {
    const logoutHandler = () => {
        console.log("logout")
        signOut(auth)
    }

    return (
        <>
            <div className="bg-gray-700 text-white p-3 text-center relative" >
                <p className="font-semibold text-lg">Secret Chat App</p>
                {user && (<p className="absolute right-3 top-3 text-gray-400 cursor-pointer" onClick={logoutHandler}>
                    LogOut
                </p>)}
            </div>
        </>
    )
}
