import React from "react";
import Step from "./Step";
import { useNavigate } from "react-router-dom";

type Step = {
  num: number;
  stepName: string;
  navPath: string;
};

const STEPS = [
  {
    num: 1,
    stepName: "your info",
    navPath: "/",
  },
  { num: 2, stepName: "select plan", navPath: "/plans" },
  { num: 3, stepName: "add-ons", navPath: "/addons" },
  { num: 4, stepName: "summary", navPath: "/summary" },
] as Step[];

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
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepsSide;
