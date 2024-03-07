import React from "react";
import { useState } from "react";

import InputForm from "./InputForm";

export default function NewProject({onAdd}) {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDueDate, setEnteredDueDate] = useState("");


  function handleSetTitle (event) {
    setEnteredTitle(event.target.value);
  }
  function handleSetDescription (event) {
    setEnteredDescription(event.target.value);
  }
  function handleSetDueDate (event) {
    setEnteredDueDate(event.target.value);
  }


  function handleCancel () {
    
  }
  function handleSave () {
    if(enteredTitle && enteredDescription && enteredDueDate) {
      onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
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
        onChange={handleSetTitle}/>
      <InputForm 
        label={"description"} 
        type="text"
        onChange={handleSetDescription} 
        isTextarea />
      <InputForm 
        label={"due date"} 
        type="date"
        onChange={handleSetDueDate} />
    </section>
  )
}