import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./routes/router";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

if(process.env.NODE_ENV !== 'production'){
    console.log("We are in development mode!");
}

const App = () => (
    <div>
        <Router />
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
 
