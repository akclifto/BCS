import React from "react";
import { randomText } from "../components/randomLorem";

const ServiceItemInfo = () => {
  return (
    <div className="container">
      <div className="serviceItem">
        <div className="serviceItem__component">
          <div className="serviceItem__head">
            Service Item: NAMED-ITEM placeholder
          </div>
          <div className="serviceItem__descr">
            More in depth information about selected service item:
            <div className="serviceItem__text">
              <p>{randomText()}</p>
              <p>{randomText()}</p>
              <p>{randomText()}</p>
            </div>
          </div>

          <div className="serviceItem__descr">
            Pricing:
            <div className="serviceItem__text">
              <p>{randomText()}</p>
            </div>
          </div>

          <div className="serviceItem__descr">
            Availability:
            <div className="serviceItem__text">
              <p>{randomText()}</p>
              <p>{randomText()}</p>
            </div>
          </div>

          <div className="serviceItem__selection">
            Select a date(s) to reserve:
            <button
              className="serviceItem__date--button"
              onClick={() => {
                alert("date selection via calendar range to go here.");
              }}
            >
              MM/DD/YYYY
            </button>
            <button
              className="serviceItem__cart--button"
              onClick={() => {
                alert("Item to be added to cart functionality.");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItemInfo;
