import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import FormField from "../UI/formField/formField";
import {useDispatch, useSelector} from "react-redux";
import {addThing, fetchCategories} from "../../store/actions/things";

const NewThing = () => {

  const initialState = {
    title: '',
    description: '',
    image: null,
    category: '',
    price: ''
  };

  const [thingInfo, setThing] = useState(initialState);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.things.categories);
  const error = useSelector(state => state.things.error);

  const inputChangeHandler = e => setThing({...thingInfo, [e.target.name]: e.target.value});
  const fileChangeHandler = e => setThing({...thingInfo, [e.target.name]: e.target.files[0]});
  const onSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(thingInfo).forEach(field => {
      data.append(field, thingInfo[field])
    });
    dispatch(addThing(data));
  };

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch]);

  return categories && (
    <div>
      <div>
        <h1>Create new thing</h1>
      </div>
      <Form onSubmit={onSubmit}>
        <FormField
          type='text'
          title='Title'
          name='title'
          placeholder='enter post title'
          onChange={inputChangeHandler}
          required
        />
        <FormField
          type='textarea'
          title='Description'
          name='description'
          placeholder='enter post description'
          onChange={inputChangeHandler}
          required
        />
        <FormField
          type='number'
          title='Price'
          name='price'
          placeholder='enter price'
          onChange={inputChangeHandler}
          className='w-25'
          required
        />
        <FormField
          type='file'
          title='Image'
          name='image'
          onChange={fileChangeHandler}
          required
        />
        <FormGroup row>
          <Label for='category' sm={2}>Categories</Label>
          <Col sm={10}>
            <Input type="select" name="category" id="category" required onChange={inputChangeHandler}>
              <option>Select category...</option>
              {categories.map(category => (
                <option value={category._id} key={category._id}>{category.name}</option>
              ))}
            </Input>
          </Col>
        </FormGroup>
        {error && <Alert color='danger'>
          {error}
        </Alert>}
        <Button>Add thing</Button>
      </Form>
    </div>
  );
};

export default NewThing;