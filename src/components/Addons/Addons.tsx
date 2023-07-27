import Addon from "./Addon";

type Props = {
  handleChangeAddons: (newAddon: AddonType) => void;
  paymentType: boolean;
};

export type AddonType = {
  title: string;
  desc: string;
  price: { monthly: number; yearly: number };
};

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

const Addons = ({ handleChangeAddons, paymentType }: Props) => {
  return (
    <div className="addons">
      <div className="main-text">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="options-list">
        {ADDONS.map((addon, ind) => (
          <Addon
            key={ind}
            title={addon.title}
            desc={addon.desc}
            price={addon.price}
            handleChangeAddons={handleChangeAddons}
            paymentType={paymentType}
          />
        ))}
      </div>
    </div>
  );
};

export default Addons;
