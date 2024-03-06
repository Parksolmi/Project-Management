import React from "react";
import Button from "./Button";
import InputForm from "./InputForm";

export default function AddProject() {

  return (
    <section className="flex flex-col basis-2/4 items-start mt-24 ml-10">
      <div className="flex flex-row w-full justify-end">
        <Button 
          bgColor={"bg-transparent"} 
          txColor={"text-zinc-600"}
          text={"Cancel"}
        />
        <Button 
          bgColor={"bg-zinc-800"} 
          txColor={"text-zinc-200"}
          text={"Save"}
        />
      </div>
      <InputForm title={"title"}/>
      <InputForm title={"description"}/>
      <InputForm title={"due date"}/>
    </section>
  )
}