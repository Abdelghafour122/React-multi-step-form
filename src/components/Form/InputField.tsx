import React, { useState } from "react";
import { fieldType } from "../GlobalFormCard";

type Props = {
  fieldId: string;
  fieldName: string;
  fieldPlaceholder: string;
  fieldType: fieldType;
};

const InputField = ({
  fieldType,
  fieldId,
  fieldName,
  fieldPlaceholder,
}: Props) => {
  const [inputValue, setInputValue] = useState("");
  // change this to work with focus & val.length
  const [inputValid, setInputValid] = useState(true);

  return (
    <div className="form-input-field">
      <div className="top">
        <label htmlFor={fieldId}>{fieldName}</label>
        <p className="error">this field is required</p>
      </div>
      <input id={fieldId} type={fieldType} placeholder={fieldPlaceholder} />
    </div>
  );
};

export default InputField;
