import { limit, onSnapshot, orderBy, query } from "@firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { colRef } from "../lib/firebaseConfig";
import Message from "./Message";

export default function MessageBox({user}) {
  const [messages, setMessages] = useState([]);

  const dummy = useRef();
  function scrollFn() {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    //  dummy.current.scrollIntoView( { behavior : "smooth"})
    const q = query(colRef, orderBy("createdAt"), limit(15));
    onSnapshot(q, (snapshot) => {
      console.log(snapshot.docs);
      const temp = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(temp);
    });
  }, []);

  console.log(messages);

  return (
    <div className="flex flex-col items-start gap-3 px-3 pt-3 pb-[70px] bg-[#1B374F]">
      <button onClick={scrollFn} className="m-auto bg-gray-200 p-2 rounded-md">
        scroll to bottom ⬇️
      </button>

      {messages.map(message => {
          
         return <Message {...message} currentUser={user} />
      })}
      <div ref={dummy}></div>
    </div>
  );
}
