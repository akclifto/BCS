import React from 'react';
import history from '../components/history';

export default class Signup extends React.Component {

    state = {
        first_name: undefined,
        last_name: undefined,
        user_name: undefined,
        phone: undefined,
        email: undefined,
        password: undefined,
        confirm_password: undefined,
        phone: undefined,
    }

    onSubmit_signup = () => {
        history.push("/");
    };

    render() {
        return (
            <div className="container">
                <div className="login">
                    <h1>Account Registration</h1>
                    <div className="login__emailPass">
                        <form
                            method="post"
                            action="">
                            <p>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={this.props.first_name}
                                    placeholder="First Name"
                                />
                            </p>
                            <p>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={this.props.last_name}
                                    placeholder="Last Name"
                                />
                            </p>
                            <p>
                                <input
                                    type="text"
                                    name="user_name"
                                    value={this.props.user_name}
                                    placeholder="Give yourself a public username"
                                />
                            </p>
                            <p>
                                <input
                                    type="text"
                                    name="email"
                                    value={this.holder_email}
                                    placeholder="Email"
                                />
                            </p>
                            <p>
                                <input
                                    
                                    type="number"
                                    name="phone"
                                    pattern="[0-9]{10}"
                                    value={this.phone}
                                    placeholder="Phone Number"
                                />
                            </p>
                            <p>
                                <input
                                    type="password"
                                    name="password"
                                    value={this.password}
                                    placeholder="Password"
                                />
                            </p>
                            <p>
                                <input
                                    type="password"
                                    name="password"
                                    value={this.confirm_password}
                                    placeholder="Confirm Password"
                                />
                            </p>
                        </form>
                        <form className="form__button">
                            <p className="login___button">
                                <button
                                    type="submit"
                                    name="submit_button"
                                    onClick={this.onSubmit_signup}
                                > Create Account
                                        </button>
                            </p>
                        </form>
                    </div>

                    <div className="help-login">
                        <div className="help-login__links">
                            <p>
                                <a href="/login">Already have an account? Click here.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};