import React from "react";

export default function Input(props) {
  return (
    <div className="inline-block relative w-64 mb-2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        for={props.id}
      >
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
        type="text"
        {...props}
      />
      <p className="block text-gray-700 text-sm font-bold mb-2">
        {props.description}
      </p>
    </div>
  );
}
