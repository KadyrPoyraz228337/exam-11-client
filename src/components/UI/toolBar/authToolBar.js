import React from 'react';
import {Button, NavbarText, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../../store/actions/users";

const AuthToolBar = () => {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  return (
    <>
      <NavbarText className='mr-3'>Hello, <b>{user.user.username}</b>!</NavbarText>
      <NavItem>
        <NavLink tag={RouterNavLink} to='/new' exact>Add new post</NavLink>
      </NavItem>
      <Button color='danger' onClick={() => dispatch(logoutUser())}>logout</Button>
    </>
  );
};

export default AuthToolBar;