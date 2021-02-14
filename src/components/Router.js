import React from 'react';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import BCSDashboard from "./BCSDashboard";
import PageNotFound from './PageNotFound';


const AppRouter = () => (

    <BrowserRouter>
        <div>

            <Switch>
                <Route path exact="/" component={BCSDashboard} />
                <Route component={PageNotFound} />
            </Switch>
        </div>

    </BrowserRouter>
);