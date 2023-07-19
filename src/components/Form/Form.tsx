import React from "react";
import InputField from "./InputField";
import { fieldType } from "../GlobalFormCard";

type Props = {};

const Form = (props: Props) => {
  return (
    <div className="form">
      <div className="form-top">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form action="">
        <InputField
          fieldId="name"
          fieldName="name"
          fieldType={fieldType.text}
          fieldPlaceholder="e.g. Stephen King"
        />
        <InputField
          fieldId="email"
          fieldName="email address"
          fieldType={fieldType.email}
          fieldPlaceholder="e.g. Stephenking@lorem.com"
        />
        <InputField
          fieldId="phone"
          fieldName="phone number"
          fieldType={fieldType.text}
          fieldPlaceholder="e.g. +1 234 567 890"
        />
      </form>
    </div>
  );
};

export default Form;
