import { AddonType } from "../../types";
import Addon from "./Addon";

type Props = {
  handleChangeAddons: (newAddon: AddonType) => void;
  paymentType: boolean;
  ADDONS: AddonType[];
  addons: Set<string>;
};

const Addons = ({ handleChangeAddons, paymentType, ADDONS, addons }: Props) => {
  return (
    <div className="addons">
      <div className="main-text">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="options-list">
        {ADDONS.map((addon, ind) => {
          return (
            <Addon
              key={ind}
              addon={addon}
              handleChangeAddons={handleChangeAddons}
              paymentType={paymentType}
              addons={addons}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Addons;
