export enum PlanEnum {
  Arcade = "Arcade",
  Advanced = "Advanced",
  Pro = "Pro",
}

export type PlanType = {
  image: string;
  type: PlanEnum;
  price: {
    yearly: number;
    monthly: number;
  };
};

type Props = PlanType & {
  paymentType: boolean;
  changePlanType: (newPlanType: PlanEnum) => void;
  planType: PlanEnum | undefined;
};

const Plan = ({
  image,
  type,
  price,
  paymentType,
  changePlanType,
  planType,
}: Props) => {
  return (
    <label className={`plan ${planType === type ? "plan-selected" : ""}`}>
      <input
        type="radio"
        name="plan"
        value={type}
        onChange={() => changePlanType(type)}
      />
      <img src={image} alt="a plan's illustration" />
      <div className="text">
        <h2>{type}</h2>
        <p>{paymentType ? `$${price.yearly}/yr` : `$${price.monthly}/mo`}</p>
        {paymentType ? <p className="notice">2 months free</p> : null}
      </div>
    </label>

    // ALTERNATIVE SOLUTION
    // <div className="plan">
    //   <img src={image} alt="a plan's illustration" />
    //   <div className="text">
    //     <h2>{type}</h2>
    //     <p>{paymentType ? `$${price.yearly}/yr` : `$${price.monthly}/mo`}</p>
    //   </div>
    // </div>
  );
};

export default Plan;
