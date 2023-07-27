import PlanTypeSwitch from "./PlanTypeSwitch";
import Plan from "./Plan";
import { PlanType } from "../../types";

type Props = {
  togglePaymentType: (val: boolean) => void;
  paymentType: boolean;
  handleChangeSubscription: (newSubscription: PlanType) => void;
  subscription: PlanType | undefined;
  PLANS: PlanType[];
};

const Plans = ({
  togglePaymentType,
  paymentType,
  handleChangeSubscription,
  subscription,
  PLANS,
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
            plan={plan}
            paymentType={paymentType}
            handleChangeSubscription={handleChangeSubscription}
            subscription={subscription}
          />
        ))}
      </div>
      <PlanTypeSwitch
        togglePaymentType={togglePaymentType}
        paymentType={paymentType}
      />
    </div>
  );
};

export default Plans;
