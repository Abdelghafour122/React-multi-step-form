import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Addons, { AddonType } from "./Addons/Addons";
import Form from "./Form/Form";
import Plans from "./Plans/Plans";
import Summary from "./Summary/Summary";
import { PlanEnum } from "./Plans/Plan";

const FormSide = () => {
  const [paymentType, setPaymentType] = useState<boolean>(false);
  const [planType, setPlanType] = useState<PlanEnum>();

  const [addons, setAddons] = useState<Set<String>>(new Set());

  const togglePaymentType = (val: boolean) => setPaymentType(val);
  const changePlanType = (newPlanType: PlanEnum) => setPlanType(newPlanType);

  const handleChangeAddons = (newAddon: AddonType) => {
    const stringifiedNewAddon = JSON.stringify(newAddon);

    addons.has(stringifiedNewAddon)
      ? addons.delete(stringifiedNewAddon)
      : addons.add(stringifiedNewAddon);

    setAddons(addons);
    console.log(addons);
  };

  return (
    <div className="form-side">
      <Routes>
        <Route path="/" index element={<Form />} />
        <Route
          path="/plans"
          element={
            <Plans
              paymentType={paymentType}
              togglePaymentType={togglePaymentType}
              changePlanType={changePlanType}
              planType={planType}
            />
          }
        />
        <Route
          path="/addons"
          element={
            <Addons
              handleChangeAddons={handleChangeAddons}
              paymentType={paymentType}
            />
          }
        />
        <Route path="/summary" element={<Summary />} />
      </Routes>
      <div className="buttons">
        <button className="back-button">go back</button>
        <button className="form-button">next step</button>
      </div>
    </div>
  );
};

export default FormSide;
