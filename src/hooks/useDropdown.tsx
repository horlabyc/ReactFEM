import React, { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

const useDropdown = (label: string, defaultState: string, options: string[]) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const DropDown: FunctionComponent = () => (
    <label htmlFor={label}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </label>
  );
  return [state, DropDown, setState] as [string, FunctionComponent, Dispatch<string>];
};

export default useDropdown;
