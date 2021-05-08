import React from "react";
import CaretDown from "./CaretDown";

export default function Select(props) {
  return (
    <div className="inline-block relative w-64 mb-2">
      {props.label && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={props.id}
        >
          {props.label}
        </label>
      )}
      <div className="inline-block relative w-64 mb-2">
        <div className="pointer-events-none absolute pin-y pin-l flex items-center justify-center right-0 bottom-0 top-0 px-2 text-grey-darker">
          <CaretDown className="fill-current h-4 w-4" />
        </div>
        <select
          {...props}
          value={props.value}
          className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {props.options}
        </select>
      </div>
      {props.description && (
        <p className="block text-gray-700 text-sm font-bold mb-2">
          {props.description}
        </p>
      )}
    </div>
  );
}
