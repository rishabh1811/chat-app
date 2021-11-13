import React from "react";

export default function Message({currentUser , text , uid , userName}) {

  return (
    <div className={(currentUser.uid ===uid)? "border rounded-lg max-w-[70vw] px-2 py-1 bg-[#E0D5FF] ml-auto" :"border rounded-lg max-w-[70vw] px-2 py-1 bg-[#EBEBEB]"}    >
      <p className=" text-md">{text}</p>
      <p className=" text-sm font-medium">{userName}</p>
    </div>
  );
}
