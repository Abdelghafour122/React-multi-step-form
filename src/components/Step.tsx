import React from "react";

type Props = {
  num: number;
  stepName: string;
};

const Step = ({ num, stepName }: Props) => {
  return (
    <div className="step">
      <button className="step-button">{num}</button>
      <div className="text">
        <p className="small-title">step {num}</p>
        <p className="bold-title">{stepName}</p>
      </div>
    </div>
  );
};

export default Step;
