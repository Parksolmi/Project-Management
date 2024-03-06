import React from "react";
import Button from "./Button";
import InputForm from "./InputForm";

export default function NewProject() {

  return (
    <section className=" w-[35rem] items-start mt-16">
      <menu className="flex justify-end gap-4 my-4">
        <button
          className={`px-5 py-2 text-stone-800 hover:text-stone-950 rounded-md`}>
          Cancel
        </button>
        <button
          className={`px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md`}>
          Save
        </button>
      </menu>
      <InputForm label={"title"} />
      <InputForm label={"description"} isTextarea />
      <InputForm label={"due date"} />
    </section>
  )
}