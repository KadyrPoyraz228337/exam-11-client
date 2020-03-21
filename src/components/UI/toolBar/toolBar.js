import React from 'react';
import {Nav} from "reactstrap";
import AuthToolBar from "./authToolBar";
import NotAuthToolBar from "./notAuthToolBar";
import {useSelector} from "react-redux";

const ToolBar = () => {
  const user = useSelector(state => state.users.user);

  return (
    <Nav className="ml-auto" navbar>
      {user ? <AuthToolBar/> : <NotAuthToolBar/>}
    </Nav>
  );
};

export default ToolBar;