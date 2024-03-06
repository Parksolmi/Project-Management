import React from "react";

export default function Button({bgColor, txColor, text}) {
  return (
    <button className={`px-5 py-2 ${bgColor} ${txColor} rounded-md mt-10`}>
      {text}
    </button>
  )
}