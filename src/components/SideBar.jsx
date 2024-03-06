import React from "react";
import Button from "./Button";

export default function SideBar() {

  return (
    <aside className="flex flex-col basis-1/4">
      <div className="basis-10"></div>
      <div className="basis-auto h-screen bg-zinc-900 rounded-se-xl pt-16 pl-8 ">
        <h3 className="text-white text-lg font-bold uppercase">Your projects</h3>
        <Button
          bgColor={"bg-zinc-700"}
          txColor={"text-zinc-300"}
          text={"+ Add Project"}
        />
      </div>
    </aside>
  )
}