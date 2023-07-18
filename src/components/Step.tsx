import React from "react";

type Props = {
  num: number;
  stepName: string;
  operation: () => void;
  selected: boolean;
  handleStepClick: (stepNum: number) => void;
};

const Step = ({
  num,
  stepName,
  operation,
  selected,
  handleStepClick,
}: Props) => {
  return (
    <div className="step">
      <button
        className={`step-button ${selected === true ? "selected" : ""}`}
        onClick={() => {
          operation();
          handleStepClick(num);
        }}
      >
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
