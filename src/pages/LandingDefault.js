import React from 'react';
import history from '../components/history';
import community from "../resources/happy-community-on-beach.jpg";


export default class LandingDefault extends React.Component {
    
    onSubmit_register = () => {
        history.push("/signup");
      };
    
    render() {
        return (
            <div className="landingDefault__container">
    
                <div className="landingDefault">
    
                    <div className="landingDefault__left">
                        <div className="landingDefault__greet">
                            <p> Make a difference in <br/>                      
                                Your Community</p>
                        </div>
                    </div>
    
                    <div className="landingDefault__right">
                        <img className="landing__img" src={community} />
                            fix this shit
                        <div className="landingDefault__signup">
                        <div className="login">
                            <h1>Join BCS Today</h1>
                            <div className="login__emailPass">
                            <form method="post" action="">
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
                                onClick={this.onSubmit_register}
                                >
                                {" "}
                                Register
                              </button>
                            </p>
                          </form>
                        </div>
                        </div>
                    </div>
    
                    </div>
                </div>
    
            </div>
        )

    };
};
   