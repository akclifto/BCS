import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BCSDashboard from "./BCSDashboard";
import Donate from "./Donate";
import Login from "./Login";
import Header from "./Header";
import PageNotFound from './PageNotFound';
import Services from './Services';
import Volunteer from './Volunteer';


const Router = () => (

    <BrowserRouter>
        <div>
            <Header />

            <Switch>
                <Route exact path="/" component={BCSDashboard} />
                <Route path="/Services" component={Services} />
                <Route path="/Volunteer" component={Volunteer} />
                <Route path="/Donate" component={Donate} />
                <Route path="/Login" component={Login} />
                <Route component={PageNotFound} />
            </Switch>
        </div>

    </BrowserRouter>
);

export default Router;
