import React from 'react';

export default class Donate extends React.Component {

    state = {
        five: "$5",
        ten: "$10",
        twentyfive: "$25",
        fifty: "$50",
        hundred: "$100",
        customDonate: "",
        isActive: false,
        totalDonation: 0,
    }

    onChange_donate = (e) => {
        e.preventDefault();
        const value = e.target.value.trim();
        this.setState(() => ({
            customDonate: value,
            totalDonation: value,
        }));
    }

    render() {
        return (
            <div className="container">

                <div className="donate">
                    <h1>Make a Donation</h1>

                    <p className="donate__descr">
                        Donations are how we survive.  Please consider supporting
                        our services and community with a monetary donation.
                    </p>

                    <div className="donate__grid">

                        <div className="donate__grid--item">
                            <button
                                className="donate__select--button"
                                onClick={(() => {
                                    this.setState(() => ({
                                        isActive: true,
                                        totalDonation: 5.00,
                                    }));
                                })}
                            >
                                {this.state.five}
                            </button>
                        </div>
                        <div className="donate__grid--item">
                            <button
                                className="donate__select--button"
                                onClick={(() => {
                                    this.setState(() => ({
                                        isActive: true,
                                        totalDonation: 10.00,
                                    }));
                                })}
                            >
                                {this.state.ten}
                            </button>
                        </div>
                        <div className="donate__grid--item">
                            <button
                                className="donate__select--button"
                                onClick={(() => {
                                    this.setState(() => ({
                                        isActive: true,
                                        totalDonation: 25.00,
                                    }));
                                })}
                            >
                                {this.state.twentyfive}
                            </button>
                        </div>
                        <div className="donate__grid--item">
                            <button
                                className="donate__select--button"
                                onClick={(() => {
                                    this.setState(() => ({
                                        isActive: true,
                                        totalDonation: 50.00,
                                    }));
                                })}
                            >
                                {this.state.fifty}
                            </button>
                        </div>
                        <div className="donate__grid--item">
                            <button
                                className="donate__select--button"
                                onClick={(() => {
                                    this.setState(() => ({
                                        isActive: true,
                                        totalDonation: 100.00,
                                    }));
                                })}
                            >
                                {this.state.hundred}
                            </button>
                        </div>
                        <div className="donate__grid--item">
                            <div className="donate__customAmount">
                                <form
                                    method="post"
                                    action="">
                                    <p>
                                        <input
                                            type="number"
                                            name="donate"
                                            value="Enter Donation Amount"   
                                            value={this.state.customDonate}
                                            onChange={this.onChange_donate}
                                            placeholder="Enter custom amount"
                                        />
                                    </p>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div className="donate__checkout">

                            <p className="donate___button">
                                <button
                                    type="submit"
                                    name="checkout_button"
                                    value="Checkout"
                                    onClick={(() => {
                                        this.props.history.push("/checkout");
                                    })}
                                    > Checkout
                                </button>
                            </p>
                    </div>

                </div>
            </div>
        );
    }
};
