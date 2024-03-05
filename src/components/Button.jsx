import React from "react";

export default function Button({text}) {
  return (
    <button className="px-4 py-2 bg-zinc-700 text-zinc-300 rounded-md mt-10">
      {text}
    </button>
  )
}