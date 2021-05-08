import React from "react";
import Select from "./Select";
import Input from "./Input";

export default function TopBar({ widgetType, apiKey, ids }) {
  return (
    <div className="list-reset flex flex-wrap items-center justify-between">
      <Input {...apiKey} />
      <Input {...ids} />
      <Select {...widgetType} />
    </div>
  );
}
