import React from "react";

export default function InputForm({isTextarea, label, ...props}) {

  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm uppercase font-bold text-stone-500">
        {label}
      </label>
      {isTextarea ? 
        <textarea 
          {...props}
          className={classes}
        /> : 
        <input 
          {...props} 
          className={classes}
        />}
    </div>
  )
}