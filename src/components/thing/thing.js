import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {deleteThing, fetchThing} from "../../store/actions/things";
import {Button} from "reactstrap";

const Thing = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const thing = useSelector(state => state.things.thing);
  const user = useSelector(state => state.users.user);

  console.log(user);

  useEffect(() => {
    dispatch(fetchThing(params.id))
  }, [dispatch, params]);

  return thing && (
    <div>
      <div className='d-flex'>
        <div className='w-50'>
          <img src={'http://localhost:8000/uploads/'+thing.image} alt="" className='border rounded w-100'/>
        </div>
        <div className='ml-3'>
          <h1 className='font-weight-bold'>{thing.title}<span className='ml-2 font-weight-normal'>({thing.category.name})</span></h1>
          <p className='text-muted'>{thing.description}</p>
        </div>
      </div>
      <div className='mt-3'>
        <h3>Seller:</h3>
        <div className='ml-4'>
          <h2 className='font-weight-bold'><span className='font-weight-normal'>full name:</span> {thing.user.username}</h2>
          <h2 className='font-weight-bold'><span className='font-weight-normal'>phone number:</span> {thing.user.number}</h2>
        </div>
      </div>
      {user && <Button color='danger' className='mt-3' onClick={() => dispatch(deleteThing(params.id))}>Delete</Button>}
    </div>
  );
};

export default Thing;