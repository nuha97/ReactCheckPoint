import logo from './logo.svg';
import bg from './bg-search.jpg';
import './App.css';
import React from 'react';

import{ Button , Form} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'


function App() {
  return (
    <div  className="container" style={{ backgroundColor:`#f1f1f1` }}>
    <Card border="info" className="card" style={{ width: '25rem' }}  >
    <Form div className="login-form">
    
    <div className="logo">
          <img src={logo} width="100" height="50" />
        </div>
    
      <center> 
      <h1><span className="font-weight-bold">REACT </span>Login</h1>
      <h2 className="text-center">Welcome</h2><br/><br/>
      </center>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" />
    <Form.Text className="text-muted">
    <a href="#">Forgot Password?</a>
    </Form.Text>
  </Form.Group>
 
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Keep Me sign in" />
  </Form.Group>

    <Button className="btn-lg btn-dark btn-block">Log In</Button>

    <div className="mt-3 mb-3">
      <a href="#">haven't account yet, Create one Now!</a>
    </div>
    </Form>
  </Card>
  </div>
   
  );
}

export default App;
