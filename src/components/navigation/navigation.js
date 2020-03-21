import React from 'react';
import {Container, Navbar, NavbarBrand} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom'
import ToolBar from "../UI/toolBar/toolBar";

const Navigation = () => {

  return (
    <Navbar color="light" light expand="md" className='mb-3'>
      <Container>
        <NavbarBrand tag={RouterNavLink} to='/'>Forum</NavbarBrand>
        <ToolBar/>
      </Container>
    </Navbar>
  );
};

export default Navigation;