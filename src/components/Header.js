import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Best Community Services</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> Dashboard</NavLink>  |
        <NavLink to="/services" activeClassName="is-active"> Services</NavLink>  |
        <NavLink to="/volunteer" activeClassName="is-active"> Volunteer</NavLink>  |
        <NavLink to="/donate" activeClassName="is-active"> Donate</NavLink>  |
        <NavLink to="/login" activeClassName="is-active"> Login</NavLink>  |
    </header>

);

export default Header;