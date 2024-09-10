import React, { useState } from 'react';

const CheckboxComponent = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    props.onChange(e.target.checked)
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {props.name}
      </label>
    </div>
  );
};

export default CheckboxComponent;
