import React from "react";
import { useState } from "react";
import Button from "./Button";

export default function SideBar() {

  const [projectList, setProjectList] = useState([]);

  const addProjectBtn = () => {

  }

  return (
    <aside className=" w-1/3 md:w-72 rounded-r-xl px-8 py-16 bg-stone-900 text-stone-100 ">
      <h3 className="text-white text-lg font-bold uppercase mb-8 md:text-xl">Your projects</h3>
      <p>
        <Button text={"+ Add Project"}/>
      </p>
      <ul></ul>
    </aside>
  )
}