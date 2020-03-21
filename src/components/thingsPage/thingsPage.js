import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories, fetchThings} from "../../store/actions/things";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Nav, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom'
import {useParams} from "react-router";

const ThingsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const things = useSelector(state => state.things.things);
  const categories = useSelector(state => state.things.categories);

  useEffect(() => {
    dispatch(fetchThings(params.id));
    dispatch(fetchCategories());
  }, [dispatch, params.id]);

  return things && (
    <div className='d-flex'>
      <Col sm="2">
        <NavItem>
          <NavLink exact tag={RouterNavLink} to='/'>All items</NavLink>
        </NavItem>
        {categories && <Nav vertical>
          {categories.map(category => (
            <NavItem key={category._id}>
              <NavLink exact tag={RouterNavLink} to={'/category/'+category._id}>{category.name}</NavLink>
            </NavItem>
          ))}
        </Nav>}
      </Col>
      <Col sm="10">
        <div className='d-flex flex-wrap'>
          {things.map(thing => (
            <Card className='mr-2 mb-2' style={{width: '32%'}} key={thing._id}>
              <CardImg top width="100%" src={'http://localhost:8000/uploads/'+thing.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>Title: {thing.title}</CardTitle>
                <CardSubtitle>Price: <b>{thing.price} KGS</b></CardSubtitle>
                <Button tag={RouterNavLink} to={'/'+thing._id}>How more</Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </Col>
    </div>
  );
};

export default ThingsPage;