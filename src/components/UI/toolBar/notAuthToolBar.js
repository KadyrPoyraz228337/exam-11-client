import React from 'react';
import {NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const NotAuthToolBar = () => {
  return (
    <>
      <NavItem>
        <NavLink tag={RouterNavLink} to='/register' exact>Register</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to='/login' exact>Login</NavLink>
      </NavItem>
    </>
  );
};

export default NotAuthToolBar;