import React from "react";
import { useState, useRef } from "react";

import InputForm from "./InputForm";

export default function NewProject({ onAdd, onCancel }) {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {

    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <section className=" w-[35rem] items-start mt-16">
      <menu className="flex justify-end gap-4 my-4">
        <button
          onClick={onCancel}
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
        ref={title} />
      <InputForm
        label={"description"}
        type="text"
        isTextarea
        ref={description} />
      <InputForm
        label={"due date"}
        type="date"
        ref={dueDate} />
    </section>
  )
}