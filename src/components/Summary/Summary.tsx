import { Link } from "react-router-dom";
import { AddonType, PlanType } from "../../types";
import { useEffect, useState } from "react";

type Props = {
  paymentType: boolean;
  addons: Set<string>;
  subscription: PlanType | undefined;
};

const Summary = ({ paymentType, addons, subscription }: Props) => {
  const [emptyAddonsList, setEmptyAddonsList] = useState(true);

  useEffect(() => {
    addons.size === 0 ? setEmptyAddonsList(true) : setEmptyAddonsList(false);
  }, [addons]);

  const formatTotalPrice = () => {
    let addonsPrice = [...addons].map((addon) => {
      let parsedAddon: AddonType = JSON.parse(addon);
      return paymentType ? parsedAddon.price.yearly : parsedAddon.price.monthly;
    });

    return addonsPrice.reduce((prev, price) => prev + price);
  };

  return (
    <div className="summary">
      <div className="main-text">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div className="main-list">
        <div className="top-plan">
          {subscription === undefined ? (
            <h2 className="no-plan">You haven't selected any plan yet!</h2>
          ) : (
            <div className="plan-payment">
              <div className="left">
                <h2>{`${subscription?.type} (${
                  paymentType ? "Yearly" : "Monthly"
                })`}</h2>
                <Link to="/plans" replace>
                  Change
                </Link>
              </div>
              <p className="price">{`$${
                paymentType
                  ? `${subscription?.price.yearly}/yr`
                  : `${subscription?.price.monthly}/mo`
              }`}</p>
            </div>
          )}
        </div>
        <div className="addons-cont">
          {emptyAddonsList ? (
            <p className="no-addons">No addons selected yet!</p>
          ) : (
            <ul>
              {[...addons].map((addon, ind) => {
                const parsedAddon: AddonType = JSON.parse(addon);
                return (
                  <li key={ind} className="list-addon">
                    <p>{parsedAddon.title}</p>
                    <p>
                      {paymentType
                        ? `+$${parsedAddon.price.yearly}/yr`
                        : `+$${parsedAddon.price.monthly}/mo`}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="total">
        {subscription === undefined ? (
          <p className="no-total">
            After selecting a plan, your total will appear here!
          </p>
        ) : subscription !== undefined && emptyAddonsList ? (
          <div className="total-payment">
            <p className="left">
              {`Total (per ${paymentType ? "year" : "month"})`}
            </p>
            <p className="right">
              {paymentType
                ? `$${subscription?.price.yearly as number}/yr`
                : `+$${subscription?.price.monthly as number}/mo`}
            </p>
          </div>
        ) : subscription !== undefined && !emptyAddonsList ? (
          <div className="total-payment">
            <p className="left">
              {`Total (per ${paymentType ? "year" : "month"})`}
            </p>
            <p className="right">
              {paymentType
                ? `$${
                    (subscription?.price.yearly as number) + formatTotalPrice()
                  }/yr`
                : `+$${
                    (subscription?.price.monthly as number) + formatTotalPrice()
                  }/mo`}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Summary;
