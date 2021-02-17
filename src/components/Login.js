import React from 'react';
import { Link } from 'react-router-dom';
import history from './history';

export default class Login extends React.Component {

    state = {
        holder_email: undefined,
        holder_pass: undefined,
    }

    onSubmit_login = (e) => {
        history.push("/");
    }

    render() {
        return (
            <div className="container">
                <div className="login">
                    <h1>Account Login</h1>
                    <div className="login__emailPass">
                        <form
                            method="post"
                            action="">
                            <p>
                                <input
                                    type="text"
                                    name="login"
                                    value={this.holder_email}
                                    placeholder="Username or Email"
                                />
                            </p>
                            <p>
                                <input
                                    type="password"
                                    name="password"
                                    value={this.holder_pass}
                                    placeholder="Password"
                                />
                            </p>
                            </form>
                            <form className="form__button">
                                <p className="login___button">
                                    <button
                                        type="submit"
                                        name="login_button"
                                        value="Login"
                                        onClick={this.onSubmit_login}
                                    > Login
                                        </button>
                                </p>
                            </form>
                    </div>

                    <div className="help-login">
                        <div className="help-login__links">
                            <p>
                                <a href="#">Forgot password?</a>
                            </p>
                            <p>
                                <a href="#">New User?  Sign up here.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
