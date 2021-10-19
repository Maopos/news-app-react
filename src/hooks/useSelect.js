import React, { useState } from "react";

const useSelect = (firstState, options) => {
  const [state, updateState] = useState(firstState);

  const SelectNews = () => {
    return (
      <select
        className="form-select"
        value={state}
        onChange={(e) => updateState(e.target.value)}
      >
        {options.map((i) => (
          <option key={i.value} value={i.value}>
            {i.label}
          </option>
        ))}
      </select>
    );
  };

  return [state, SelectNews];
};

export default useSelect;
