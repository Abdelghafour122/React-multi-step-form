import { PlanType } from "../../types";

type Props = {
  paymentType: boolean;
  handleChangeSubscription: (newPlanType: PlanType) => void;
  plan: PlanType;
  subscription: PlanType | undefined;
};

const Plan = ({
  plan,
  paymentType,
  handleChangeSubscription,
  subscription,
}: Props) => {
  return (
    <label
      className={`plan ${
        subscription?.type === plan.type ? "plan-selected" : ""
      }`}
    >
      <input
        type="radio"
        name="plan"
        value={plan.type}
        onChange={() => handleChangeSubscription(plan)}
      />
      <img src={plan.image} alt="a plan's illustration" />
      <div className="text">
        <h2>{plan.type}</h2>
        <p>
          {paymentType
            ? `$${plan.price.yearly}/yr`
            : `$${plan.price.monthly}/mo`}
        </p>
        {paymentType ? <p className="notice">2 months free</p> : null}
      </div>
    </label>
  );
};

export default Plan;
