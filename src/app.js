import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/router';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

if(process.env.NODE_ENV !== 'production'){
    console.log("We are in development mode!");
}

const App = () => (
    <div>
        <Routes />
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
 
