import React from "react";
import Toggle from "./Toggle";
import Select from "./Select";

export default function Footer({ select, toggle }) {
  return (
    <div className="list-reset flex flex-wrap items-center justify-between my-2 pt-3">
      <Toggle {...toggle} />
      <Select {...select} />
    </div>
  );
}
