import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Addons from "./Addons/Addons";
import Form from "./Form/Form";
import Plans from "./Plans/Plans";
import Summary from "./Summary/Summary";

const FormSide = () => {
  const [paymentType, setPaymentType] = useState<boolean>(false);
  const togglePaymentType = (val: boolean) => setPaymentType(val);

  // testing
  useEffect(() => {
    console.log(paymentType);
  }, [paymentType]);

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
            />
          }
        />
        <Route path="/addons" element={<Addons />} />
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
