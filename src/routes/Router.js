import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BCSDashboard from "../components/containers/BCSDashboard";
import Account from "../components/Account";
import Checkout from "../components/Checkout";
import Donate from "../components/Donate";
import Login from "../components/Login";
import Header from "../components/Header";
import PageNotFound from '../components/PageNotFound';
import Services from '../components/Services';
import Volunteer from '../components/Volunteer';


const Router = () => (

    <BrowserRouter>
        <div>
            <Header />

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
        </div>

    </BrowserRouter>
);

export default Router;
