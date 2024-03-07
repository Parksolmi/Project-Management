import React from "react";
import { useState, useRef } from "react";

import InputForm from "./InputForm";

export default function NewProject({onAdd}) {

  const enteredTitle = useRef();
  const enteredDescription = useRef();
  const enteredDueDate = useRef();

  function handleCancel () {
    
  }
  function handleSave () {
    if(enteredTitle.current.value && enteredDescription.current.value && enteredDueDate.current.value) {
      onAdd({
        title: enteredTitle.current.value,
        description: enteredDescription.current.value,
        dueDate: enteredDueDate.current.value,
      })
    } else {
      console.log("NOT VALID");
    }
  }

  return (
    <section className=" w-[35rem] items-start mt-16">
      <menu className="flex justify-end gap-4 my-4">
        <button
          onClick={handleCancel}
          className={`px-5 py-2 text-stone-800 hover:text-stone-950 rounded-md`}>
          Cancel
        </button>
        <button
          onClick={handleSave}
          className={`px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md`}>
          Save
        </button>
      </menu>
      <InputForm 
        label={"title"} 
        type="text"
        ref={enteredTitle}/>
      <InputForm 
        label={"description"} 
        type="text"
        isTextarea 
        ref={enteredDescription}/>
      <InputForm 
        label={"due date"} 
        type="date"
        ref={enteredDueDate}/>
    </section>
  )
}