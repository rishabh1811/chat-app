import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "@firebase/auth";
import React from "react";
import { auth } from "../lib/firebaseConfig";

export default function SignIn() {
  const signinHandler = async () => {
    const provider = new GoogleAuthProvider();
    // signInWithRedirect(auth, provider);
    signInWithPopup(auth , provider)
  };

  return (
    <>
      <div className="bg-[#1B374F] h-[100vh] pt-8 " >
        <h1 className="text-3xl font-bold text-center  text-white">
          Secrete Group Chat App
        </h1>
        <h1 className="text-center text-lg my-5 text-white">SignIn to Enter Chat</h1>
        <button
          className="bg-[#DB4437] text-white block px-5 py-2 mx-auto"
          onClick={signinHandler}
        >
          Sign In With Google
        </button>
      </div>
      
    </>
  );
}
