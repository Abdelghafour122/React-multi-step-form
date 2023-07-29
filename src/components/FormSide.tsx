import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Addons from "./Addons/Addons";
import Form from "./Form/Form";
import Plans from "./Plans/Plans";
import Summary from "./Summary/Summary";
import { AddonType, PlanEnum, PlanType } from "../types";

const PLANS: PlanType[] = [
  {
    image: "/images/icon-arcade.svg",
    price: { monthly: 9, yearly: 90 },
    type: PlanEnum.Arcade,
  },
  {
    image: "/images/icon-advanced.svg",
    price: { monthly: 12, yearly: 120 },
    type: PlanEnum.Advanced,
  },
  {
    image: "/images/icon-pro.svg",
    price: { monthly: 15, yearly: 150 },
    type: PlanEnum.Pro,
  },
];

const ADDONS: AddonType[] = [
  {
    title: "Online service",
    desc: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    title: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    title: "Customizable Profile",
    desc: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

const ROUTES = ["/", "plans", "addons", "summary"];

const FormSide = () => {
  const [paymentType, setPaymentType] = useState<boolean>(false);
  const [subscription, setSubscribtion] = useState<PlanType>();

  const [addons, setAddons] = useState<Set<string>>(new Set());

  const togglePaymentType = (val: boolean) => setPaymentType(val);
  const handleChangeSubscription = (newPlanType: PlanType) =>
    setSubscribtion(newPlanType);

  const handleChangeAddons = (newAddon: AddonType) => {
    const stringifiedNewAddon = JSON.stringify(newAddon);

    addons.has(stringifiedNewAddon)
      ? addons.delete(stringifiedNewAddon)
      : addons.add(stringifiedNewAddon);

    setAddons(addons);
  };

  const navigate = useNavigate();
  let stepNum = 0;

  // FINAL STEP:
  // MAKE A FUNCTION TO DETECT THE STEP'S NUMBER TO SYNC WITH THE BUTTONS...
  // EX: IF YOU ROUTE WITH STEPS, SYNC MUST HAPPEN WITH BUTTONS

  const buttonNavigation = () => {};

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
              handleChangeSubscription={handleChangeSubscription}
              subscription={subscription}
              PLANS={PLANS}
            />
          }
        />
        <Route
          path="/addons"
          element={
            <Addons
              handleChangeAddons={handleChangeAddons}
              paymentType={paymentType}
              ADDONS={ADDONS}
              addons={addons}
            />
          }
        />
        <Route
          path="/summary"
          element={
            <Summary
              addons={addons}
              paymentType={paymentType}
              subscription={subscription}
            />
          }
        />
      </Routes>
      <div className="buttons">
        {/* CHANGE DISABLED TO OPACITY: 0, HIDE THE BUTTON. */}
        <button
          className="back-button"
          // onClick={() => navigate(-1)}
          onClick={() => console.log(--stepNum)}
          disabled={stepNum === 0}
        >
          go back
        </button>
        <button
          className="form-button"
          // onClick={() => navigate(ROUTES[++stepNum])}
          onClick={() => console.log(++stepNum === ROUTES.length - 1)}
          disabled={stepNum === ROUTES.length - 1}
        >
          next step
        </button>
      </div>
    </div>
  );
};

export default FormSide;
