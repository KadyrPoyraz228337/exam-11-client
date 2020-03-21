import React, {useState} from 'react';
import {Alert, Button, Form} from "reactstrap";
import FormField from "../UI/formField/formField";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../store/actions/users";

const RegisterPage = () => {
  const initialState = {
    username: '',
    password: '',
    email: ''
  };

  const [userInfo, setUser] = useState(initialState);
  const error = useSelector(state => state.users.error);
  const dispatch = useDispatch();

  const inputChangeHandler = e => setUser({...userInfo, [e.target.name]: e.target.value});
  const onSubmit = async e => {
    e.preventDefault();
    await dispatch(registerUser(userInfo));
  };
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
            required
          />
          <FormField
            type='email'
            title='Email'
            name='email'
            placeholder='enter your email'
            onChange={inputChangeHandler}
            required
          />
          <FormField
            type='password'
            title='Password'
            name='password'
            placeholder='enter your password'
            onChange={inputChangeHandler}
            required
          />
          {error && <Alert color="danger">
            имя или электронная почта уже заняты
          </Alert>}
          <Button>Register</Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;