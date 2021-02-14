import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Best Community Services</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> Dashboard</NavLink>  |
        <NavLink to="/Services" activeClassName="is-active"> Services</NavLink>  |
        <NavLink to="/Volunteer" activeClassName="is-active"> Volunteer</NavLink>  |
        <NavLink to="/Donate" activeClassName="is-active"> Donate</NavLink>  |
        <NavLink to="/Login" activeClassName="is-active"> Login</NavLink>  |
    </header>

);

export default Header;