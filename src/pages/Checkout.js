import React from "react";
import history from "../components/history";
import {
  randomHeadline,
  randomCost,
  totalRandomCost,
} from "../components/randomLorem";

export default class Signup extends React.Component {
  state = {
    paymentMethod: undefined,
  };

  onSubmit_checkout = () => {
    history.push("/home");
  };

  render() {
    return (
      <div className="container">
        <div className="checkout">
          <h1>Checkout</h1>
          <div className="checkout__payment">
            Payment Information:
            <form className="checkout__payment--form" method="post" action="">
              <p>
                <input
                  type="password"
                  name="payment_number"
                  value={this.props.first_name}
                  placeholder="Credit Card Number"
                />
              </p>
              <p>
                <input
                  type="text"
                  name="expiration"
                  value={this.props.last_name}
                  placeholder="Expiration"
                />
              </p>
              <p>
                <input
                  type="number"
                  name="number"
                  value={this.props.user_name}
                  placeholder="Security Code"
                />
              </p>
              <p className="checkout__payment">Checkout Details:</p>
              <div className="checkout__items">
                Item(s) in Cart:
                <div className="checkout__itemsInfo">
                  <li>{randomHeadline()}</li>
                  <ul className="checkout__itemsCost">${randomCost()}</ul>
                  <li className="checkout__itemsInfo">{randomHeadline()}</li>
                  <ul className="checkout__itemsCost">${randomCost()}</ul>
                  <li className="checkout__itemsInfo">{randomHeadline()}</li>
                  <ul className="checkout__itemsCost">${randomCost()}</ul>
                </div>
                <div className="checkout__total-left">
                  Total:
                  <div className="checkout__total-right">
                    ${totalRandomCost()}
                  </div>
                </div>
              </div>

              <div className="checkout__confirm">
                <p className="checkout__confirm--head">
                  Confirm account password:
                </p>
              </div>
              <p>
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                />
              </p>
            </form>
            <form className="form__button">
              <p className="checkout___button">
                <button
                  type="submit"
                  name="submit_button"
                  onClick={this.onSubmit_checkout}
                >
                  {" "}
                  Place Order
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
