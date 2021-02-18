import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="header__container">
        <div className="header">
            <a href="/" className="header__company">Best Community Services</a>
            <div className="header__nav">
                <NavLink to="/" activeClassName="is-active" exact={true} className="nav"> Dashboard</NavLink>
                <NavLink to="/services" activeClassName="is-active" className="nav"> Services</NavLink>
                <NavLink to="/volunteer" activeClassName="is-active" className="nav"> Volunteer</NavLink>
                <NavLink to="/donate" activeClassName="is-active" className="nav"> Donate</NavLink>
                <NavLink to="/login" activeClassName="is-active" className="nav"> Login</NavLink>
            </div>
        </div>
    </div>
);

export default Header;