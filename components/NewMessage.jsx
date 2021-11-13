import { addDoc } from '@firebase/firestore';
import React from 'react'
import { colRef } from '../lib/firebaseConfig';

export default function NewMessage({user}) {

    const submitHandler = (e) => {
        e.preventDefault();
         const text = e.currentTarget.text.value;
         
         const createdAt = new Date().getTime()
        addDoc(colRef, {
            text,
            uid: user.uid,
            userName: user.displayName,
            createdAt,

        })
        e.currentTarget.reset();

    }

    return (
        <>
           <form className="flex h-12 fixed bottom-0 left-0 w-full pb" onSubmit={submitHandler}>
               <input className=" bg-gray-500 flex-grow text-white" type="text" name="text"  required/>
               <button className="bg-gray-800 px-5 " type="submit">🚀</button>
           </form>
        </>
    )
}
