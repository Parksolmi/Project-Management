import { useState, useEffect } from "react";
import Button from "./Button";

export default function SideBar({ 
  onStartAddProject, 
  onSelectProject, 
  projects,
  selectedId }) {


  return (
    <aside className=" w-1/3 md:w-72 rounded-r-xl px-8 py-16 bg-stone-900 text-stone-100 ">
      <h3 className="text-white text-lg font-bold uppercase mb-8 md:text-xl">Your projects</h3>
      <p>
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </p>
      <ul className="mt-8">
        {projects.map((project) => {

          return (
            <li key={project.id}>
              <button 
              className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-tone-200 hover:bg-stone-800"
              onClick={() => onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}