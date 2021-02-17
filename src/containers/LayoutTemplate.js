import React from 'react';
import Header from '../components/Header';

export default (props) => {

    const { children } = props;

    return (
        <div>
            <Header />
            <div> {children} </div>
        </div>
    );
};