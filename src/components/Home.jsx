import React from "react";
import logo from '../assets/no-projects.png';
import Button from "./Button";

export default function Home() {

  return (
    <>
      <section className="flex flex-col basis-3/4 items-center mt-40">
        <img 
          src={logo}
          alt={"No porject logo"} 
          className=" w-16"
        />
        <h1 className="my-5 text-center text-2xl font-bold text-zinc-600">No project selected</h1>
        <p className="text-zinc-400">Select a project or get started with a new one</p>
        <Button text={"Create New project"}/>
      </section>
    </>
  )
}