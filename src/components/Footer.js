import React from "react";
import Input from "./Input";
import Select from "./Select";

export default function Footer({ widgetType, apiKey, ids }) {
  return (
    <div className="list-reset flex flex-wrap items-center justify-between my-2 pt-5">
      <Input {...apiKey} />
      <Input {...ids} />
      <Select {...widgetType} />
    </div>
  );
}
