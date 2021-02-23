import React from "react";
import { randomText } from "../components/randomLorem";

const VolunteerItemInfo = () => {
  return (
    <div className="container">
      <div className="serviceItem">
        <div className="serviceItem__component">
          <div className="serviceItem__head">
            Volunteer Item: NAMED-ITEM placeholder
          </div>
          <div className="serviceItem__descr">
            More in depth information about selected volunteer item:
            <div className="serviceItem__text">
              <p>{randomText()}</p>
              <p>{randomText()}</p>
              <p>{randomText()}</p>
            </div>
          </div>

          <div className="serviceItem__descr">
            Required Skills or assessment information:
            <div className="serviceItem__text">
              <p>{randomText()}</p>
            </div>
          </div>

          <div className="serviceItem__descr">
            Needed Availability:
            <div className="serviceItem__text">
              <p>{randomText()}</p>
              <p>{randomText()}</p>
            </div>
          </div>

          <div className="serviceItem__selection">
            Select a date(s) and time(s) to volunteer:
            <button
              className="serviceItem__date--button"
              onClick={() => {
                alert("date and time selection via calendar range to go here.");
              }}
            >
              MM/DD/YYYY
            </button>
            <button
              className="serviceItem__date--button"
              onClick={() => {
                alert("time selection range to go here.");
              }}
            >
              12AM - 12AM
            </button>
            <button
              className="serviceItem__cart--button"
              onClick={() => {
                alert(
                  "Volunteer infomation to be added to account functionality and visible in Volunteering card on dashboard."
                );
              }}
            >
              Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerItemInfo;
