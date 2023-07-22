import PlanTypeSwitch from "./PlanTypeSwitch";
import Plan, { PlanType, PlanEnum } from "./Plan";

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

type Props = {
  togglePaymentType: (val: boolean) => void;
  paymentType: boolean;
  changePlanType: (newPlanType: PlanEnum) => void;
  planType: PlanEnum | undefined;
};

const Plans = ({
  togglePaymentType,
  paymentType,
  changePlanType,
  planType,
}: Props) => {
  return (
    <div className="plans">
      <div className="main-text">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="plans-container">
        {PLANS.map((plan, ind) => (
          <Plan
            key={ind}
            image={plan.image}
            price={plan.price}
            type={plan.type}
            paymentType={paymentType}
            changePlanType={changePlanType}
            planType={planType}
          />
        ))}
      </div>
      <PlanTypeSwitch togglePaymentType={togglePaymentType} />
    </div>
  );
};

export default Plans;
