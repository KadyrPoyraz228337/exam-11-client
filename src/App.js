import React from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import RegisterPage from "./components/registerPage/registerPage";
import LoginPage from "./components/loginPage/loginPage";

function App() {
  return (
    <div>
      <Navigation/>
      <Container>
        <Switch>
          <Route path='/' exact render={() => <h1>123</h1>}/>
          <Route path='/register' exact component={RegisterPage}/>
          <Route path='/login' exact component={LoginPage}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
