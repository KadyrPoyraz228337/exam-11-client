import React, {useEffect, useState} from 'react';
import FormField from "../UI/formField/formField";
import {Alert, Button, Form} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, loginUserInit} from "../../store/actions/users";

const LoginPage = () => {
  const initialState = {
    username: '',
    password: '',
  };
  const [userInfo, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.error);

  const inputChangeHandler = e => setUser({...userInfo, [e.target.name]: e.target.value});
  const onSubmit = async e => {
    e.preventDefault();
    dispatch(loginUser(userInfo))
  };

  useEffect(() => {
    dispatch(loginUserInit())
  }, [dispatch]);

  return (
    <div className='mx-auto w-75'>
      <Form onSubmit={onSubmit}>
        <FormField
          title='Username'
          type='text'
          placeholder='enter username'
          name='username'
          onChange={inputChangeHandler}
        />
        <FormField
          title='password'
          type='password'
          placeholder='enter password'
          name='password'
          onChange={inputChangeHandler}
        />
        {error && <Alert color="danger">
          {error}
        </Alert>}
        <Button>Login</Button>
      </Form>
    </div>
  );
};

export default LoginPage;