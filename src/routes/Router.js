import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BCSDashboard from "../components/BCSDashboard";
import Account from "../pages/Account";
import Checkout from "../pages/Checkout";
import Donate from "../pages/Donate";
import LayoutTemplate from "../containers/LayoutTemplate";
import Login from "../pages/Login";
import Header from "../components/Header";
import PageNotFound from '../pages/PageNotFound';
import Services from '../pages/Services';
import Volunteer from '../pages/Volunteer';


const Router = () => (

    <BrowserRouter>
        <div>
            <LayoutTemplate>
                <Switch>
                    <Route exact path="/" component={BCSDashboard} />
                    <Route path="/account" component={Account} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/donate" component={Donate} />
                    <Route path="/login" component={Login} />
                    <Route path="/services" component={Services} />
                    <Route path="/volunteer" component={Volunteer} />
                    <Route component={PageNotFound} />
                </Switch>
            </LayoutTemplate>
        </div>

    </BrowserRouter>
);

export default Router;
