import { useLocation } from "react-router";
import { StepType } from "./StepsSide";
import { useEffect, useState } from "react";

type Props = {
  step: StepType;
  operation: () => void;
};

const Step = ({ step, operation }: Props) => {
  const location = useLocation();
  const [isCurrentStep, setIsCurrentStep] = useState(false);

  useEffect(() => {
    location.pathname.substring(1) === step.navPath.substring(1)
      ? setIsCurrentStep(true)
      : setIsCurrentStep(false);

    console.log(location.pathname.substring(1) === step.navPath.substring(1));
  }, [location]);

  return (
    <div className="step">
      <button
        className={`step-button ${isCurrentStep ? "selected" : ""}`}
        onClick={() => operation()}
      >
        {step.num}
      </button>
      <div className="text">
        <p className="small-title">step {step.num}</p>
        <p className="bold-title">{step.stepName}</p>
      </div>
    </div>
  );
};

export default Step;
