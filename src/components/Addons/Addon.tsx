import { useState } from "react";
import { AddonType } from "../../types";

type Props = {
  handleChangeAddons: (newAddon: AddonType) => void;
  paymentType: boolean;
  addon: AddonType;
  addons: Set<string>;
};

// ADD THE CHECKED CLASS FOR SELECTED ADDONS, LIKE IN PLANS

const Addon = ({ addon, handleChangeAddons, paymentType, addons }: Props) => {
  const [addonChecked, setAddonChecked] = useState(
    addons.has(JSON.stringify(addon))
  );

  return (
    <label className="addon">
      <div className="left">
        <input
          type="checkbox"
          name={addon.title}
          value={JSON.stringify(addon)}
          onChange={(e) => {
            handleChangeAddons(JSON.parse(e.target.value));
            setAddonChecked(!addonChecked);
          }}
          checked={addonChecked}
        />
        <div className="text">
          <h2>{addon.title}</h2>
          <p>{addon.desc}</p>
        </div>
      </div>
      <p className="price">
        {paymentType
          ? `+$${addon.price.yearly}/yr`
          : `+$${addon.price.monthly}/mo`}
      </p>
    </label>
  );
};

export default Addon;
