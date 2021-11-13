import React from "react";
import Message from "./Message";
import MessageBox from "./MessageBox";
import Navbar from "./Navbar";
import NewMessage from "./NewMessage";

export default function Chatapp({ user }) {
  return (
    <>
      {console.log(user)}
      <Navbar user={user} />
      <MessageBox user={user} />
      <NewMessage user={user}/>
    </>
  );
}
