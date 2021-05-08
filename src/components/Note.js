import React from "react";

export default function Note({ text }) {
  return (
    <div className="inline-block relative mb-2">
      <span className="mr-10 font-bold text-gray-700 text-lg">Note:</span>
      <p className="text-md font-bold mb-2">{text}</p>
    </div>
  );
}
