import React, {useState} from 'react';
import FormField from "../UI/formField/formField";
import {Button, Form} from "reactstrap";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/actions/users";

const LoginPage = () => {
  const initialState = {
    email: '',
    password: '',
  };
  const [userInfo, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const inputChangeHandler = e => setUser({...userInfo, [e.target.name]: e.target.value});
  const onSubmit = async e => {
    e.preventDefault();
    dispatch(loginUser(userInfo))
  };

  return (
    <div className='mx-auto w-75'>
      <Form onSubmit={onSubmit}>
        <FormField
          title='Email'
          type='email'
          placeholder='enter email'
          name='email'
          value={userInfo.email}
          onChange={inputChangeHandler}
        />
        <FormField
          title='password'
          type='password'
          placeholder='enter password'
          name='password'
          value={userInfo.password}
          onChange={inputChangeHandler}
        />
        {/*{error && <Alert color="danger">*/}
        {/*  {error}*/}
        {/*</Alert>}*/}
        <Button>Login</Button>
      </Form>
    </div>
  );
};

export default LoginPage;