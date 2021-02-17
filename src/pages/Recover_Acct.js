import React from 'react';

export default class RecoverAcct extends React.Component {

    state = {
        email: undefined,
        recoverStatus: undefined,
    }

    onSubmit_recover = (e) => {

        try {
            e.preventDefault();
            this.setState(() => ({
                recoverStatus: "Recovery email sent.  Please check your inbox!",
            }));
    
            if (recoverStatus !== undefined) {
                 this.setState(() => ({
                     recoverStatus: undefined
                    }));
            }
        } catch (err) {
            if(err instanceof ReferenceError) {
                //do nothing for the reference_error
                console.log(err.message);
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="login">
                    <h1>Recover Account</h1>
                    <div className="login__emailPass">
                        <form
                            method="post"
                            action="">
                            <p>
                                <input
                                    type="text"
                                    name="login"
                                    value={this.email}
                                    placeholder="Enter your account email address"
                                />
                            </p>
                        </form>
                        <form className="form__button">
                            <p className="login___button">
                                <button className="button_recover"
                                    type="submit"
                                    name="login_button"
                                    value="Login"
                                    onClick={this.onSubmit_recover}
                                > Recover Account
                        </button>
                            </p>
                        </form>
                        {
                            this.state.recoverStatus && 
                            <p className="recover_status"> 
                            {this.state.recoverStatus} </p> 
                        }
                    </div>

                    <div className="help-login">
                        <div className="help-login__links">
                            <p>
                                <a href="/login">Return to Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
