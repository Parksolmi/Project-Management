import React from "react";

export default function InputForm({title}) {
  return (
    <div className=" w-full mt-8">
      <h4 className="uppercase font-bold text-zinc-600">{title}</h4>
      <input className="w-full bg-zinc-300 px-1 py-1 focus:outline-none focus:border-b-2 border-zinc-500 rounded-sm"></input>
    </div>
  )
}