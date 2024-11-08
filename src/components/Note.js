import React from "react";

export default function Note({ text }) {
  return (
    <div className="inline-block relative my-2">
      <span className="mr-10 text-gray-700">
        <p className="text-md">{text}</p>
      </span>
    </div>
  );
}
