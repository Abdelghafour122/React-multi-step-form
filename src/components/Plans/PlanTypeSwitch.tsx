import React, { useState } from "react";

type Props = {
  togglePaymentType: (val: boolean) => void;
};

const PlanTypeSwitch = ({ togglePaymentType }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    togglePaymentType(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <div className="plan-switch">
      <p className={isChecked ? "grey" : "blue"}>Monthly</p>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
      <p className={isChecked ? "blue" : "grey"}>Yearly</p>
    </div>
  );
};

export default PlanTypeSwitch;
