import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./components/Router";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const jsx = (
    <div>
        <Router />
    </div>
);

 ReactDOM.render(jsx, document.getElementById('app'));
 
