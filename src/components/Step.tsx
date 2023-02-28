import React from "react";

type Props = {
  num: number;
  stepName: string;
  operation: () => void;
};

const Step = ({ num, stepName, operation }: Props) => {
  return (
    <div className="step">
      <button className="step-button" onClick={operation}>
        {num}
      </button>
      <div className="text">
        <p className="small-title">step {num}</p>
        <p className="bold-title">{stepName}</p>
      </div>
    </div>
  );
};

export default Step;
