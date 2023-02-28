import React from "react";
import FormSide from "./FormSide";
import StepsSide from "./StepsSide";

export enum fieldType {
  text = "text",
  email = "email",
}

type Props = {};

const GlobalFormCard = (props: Props) => {
  return (
    <div className="global-card">
      <StepsSide />
      <FormSide />
    </div>
  );
};

export default GlobalFormCard;
