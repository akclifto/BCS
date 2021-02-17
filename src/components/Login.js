import React from 'react';

export default () => (
    <div className="container">
        <div className="login" align="center">
            <h1>Login</h1>
            <div className="login__emailPass">
                <p>
                    <input
                        type="text"
                        name="login"
                        value=""
                        placeholder="Username or Email"
                    />
                </p>
                <p>
                    <input
                        type="password"
                        name="password"
                        value=""
                        placeholder="Password"
                    />
                </p>
                <p className="submit__login">
                    <input
                        type="submit"
                        name="submitButton"
                        value="Login"
                    />
                </p>
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
