import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Account from "../pages/Account";
import Checkout from "../pages/Checkout";
import Donate from "../pages/Donate";
import Landing from "../pages/Landing";
import LayoutTemplate from "../containers/LayoutTemplate";
import Login from "../pages/Login";
import PageNotFound from '../pages/PageNotFound';
import Services from '../pages/Services';
import Signup from '../pages/Signup';
import RecoverAcct from '../pages/Recover_Acct';
import Volunteer from '../pages/Volunteer';

export default () => (

        <div>
            <LayoutTemplate>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/account" component={Account} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/donate" component={Donate} />
                    <Route path="/login" component={Login} />
                    <Route path="/recover-account" component={RecoverAcct} />
                    <Route path="/services" component={Services} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/volunteer" component={Volunteer} />
                    <Route component={PageNotFound} />
                </Switch>
            </LayoutTemplate>
        </div>

);
