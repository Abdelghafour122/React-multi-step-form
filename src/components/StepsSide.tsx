import React from "react";
import Step from "./Step";
import { useNavigate } from "react-router-dom";

type Step = {
  num: number;
  stepName: string;
  navPath: string;
  selected: boolean;
};

const STEPS = [
  {
    num: 1,
    stepName: "your info",
    navPath: "/",
    selected: true,
  },
  { num: 2, stepName: "select plan", navPath: "/plans", selected: false },
  { num: 3, stepName: "add-ons", navPath: "/addons", selected: false },
  { num: 4, stepName: "summary", navPath: "/summary", selected: false },
] as Step[];

const handleStepClick = (stepNum: number) => {
  STEPS.forEach((step) => {
    step.num === stepNum ? (step.selected = true) : (step.selected = false);
  });
};

const StepsSide = () => {
  const navigate = useNavigate();
  return (
    <div className="steps-container">
      <ul className="steps">
        {STEPS.map((step) => {
          return (
            <li key={step.num}>
              <Step
                num={step.num}
                stepName={step.stepName}
                operation={() => navigate(step.navPath)}
                selected={step.selected}
                handleStepClick={handleStepClick}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepsSide;
