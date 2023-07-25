import { AddonType } from "./Addons";

type Props = AddonType & {
  handleChangeAddons: (newAddon: AddonType) => void;
  paymentType: boolean;
};

const Addon = ({
  title,
  desc,
  price,
  handleChangeAddons,
  paymentType,
}: Props) => {
  return (
    <label className="addon">
      <div className="left">
        <input
          type="checkbox"
          name={title}
          value={JSON.stringify({ title, desc, price })}
          onChange={(e) => handleChangeAddons(JSON.parse(e.target.value))}
        />
        <div className="text">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <p className="price">
        {paymentType ? `+$${price.yearly}/yr` : `+$${price.monthly}/mo`}
      </p>
    </label>
  );
};

export default Addon;
