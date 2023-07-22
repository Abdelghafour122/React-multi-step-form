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
};

const Plan = ({ image, type, price, paymentType }: Props) => {
  return (
    <div className="plan">
      <img src={image} alt="a plan's illustration" />
      <div className="text">
        <h2>{type}</h2>
        <p>{paymentType ? `$${price.yearly}/yr` : `$${price.monthly}/mo`}</p>
      </div>
    </div>
  );
};

export default Plan;
