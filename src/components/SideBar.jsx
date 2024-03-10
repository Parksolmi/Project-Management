import { useState, useEffect } from "react";
import Button from "./Button";

export default function SideBar({ onStartAddProject, onSelectProject, projects }) {


  return (
    <aside className=" w-1/3 md:w-72 rounded-r-xl px-8 py-16 bg-stone-900 text-stone-100 ">
      <h3 className="text-white text-lg font-bold uppercase mb-8 md:text-xl">Your projects</h3>
      <p>
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </p>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id} onClick={() => onSelectProject(project)}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-tone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}