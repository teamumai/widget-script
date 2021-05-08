import React from "react";

export default function Note({ text }) {
  return (
    <div className="inline-block relative mb-2">
      <span className="mr-10 text-gray-700">
        <p className="font-bold text-lg">Note:</p>
        <p className="text-md mb-2">{text}</p>
      </span>
    </div>
  );
}
