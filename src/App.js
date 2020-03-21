import React from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import RegisterPage from "./components/registerPage/registerPage";
import LoginPage from "./components/loginPage/loginPage";
import NewThing from "./components/newThing/newThing";
import ThingsPage from "./components/thingsPage/thingsPage";
import Thing from "./components/thing/thing";

function App() {
  return (
    <div>
      <Navigation/>
      <Container>
        <Switch>
          <Route path='/' exact component={ThingsPage}/>
          <Route path='/new' exact component={NewThing}/>
          <Route path='/register' exact component={RegisterPage}/>
          <Route path='/login' exact component={LoginPage}/>
          <Route path='/:id' exact component={Thing}/>
          <Route path='/category/:id' exact component={ThingsPage}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
