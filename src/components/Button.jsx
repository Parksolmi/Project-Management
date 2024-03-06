import React from "react";

export default function Button({text, ...props}) {
  return (
    <button
        className={`px-4 py-2 bg-stone-700 hover:bg-stone-600 text-stone-300 hover:text-stone-50 rounded-md`} 
        {...props}>
        {text}
      </button>
  )
}