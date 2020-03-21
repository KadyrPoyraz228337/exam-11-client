import React, {useEffect, useState} from 'react';
import {Alert, Button, Form} from "reactstrap";
import FormField from "../UI/formField/formField";
import {useDispatch, useSelector} from "react-redux";
import {loginUserInit, registerUser} from "../../store/actions/users";

const RegisterPage = () => {
  const initialState = {
    username: '',
    password: '',
    displayName: '',
    number: ''
  };

  const [userInfo, setUser] = useState(initialState);
  const error = useSelector(state => state.users.error);
  const dispatch = useDispatch();

  const inputChangeHandler = e => setUser({...userInfo, [e.target.name]: e.target.value});
  const onSubmit = async e => {
    e.preventDefault();
    await dispatch(registerUser(userInfo));
  };

  useEffect(() => {
    dispatch(loginUserInit())
  }, [dispatch]);
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <div className='mx-auto w-75'>
          <FormField
            type='text'
            title='Username'
            name='username'
            placeholder='enter your username'
            onChange={inputChangeHandler}
          />
          <FormField
            type='password'
            title='Password'
            name='password'
            placeholder='enter your password'
            onChange={inputChangeHandler}
          />
          <FormField
            type='text'
            title='Display name'
            name='displayName'
            placeholder='enter your display name'
            onChange={inputChangeHandler}
          />
          <FormField
            type='text'
            title='Phone number'
            name='number'
            placeholder='enter your display phone number'
            onChange={inputChangeHandler}
          />
          {error && <Alert color="danger">
            {error}
          </Alert>}
          <Button>Register</Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;