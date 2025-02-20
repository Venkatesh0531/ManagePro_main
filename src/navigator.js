import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import navimg from './navimg.jpg'; // Import the image
import './navi.css';

function NavigationBar() {
  const [showUsername, setShowUsername] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function toggleInput() {
    setShowUsername(!showUsername);
  }

  function sendEmail() {
    window.location.href = "mailto:managepro@gmail.com";
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <div className='favicon'>
          <img src={navimg} alt="Logo" width={"100px"} height={"70px"} className='navimage'/>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"> {/* Align the content to the right */}
          <Nav.Link className='adj' href="#home">Home</Nav.Link>
          <Nav.Link className='adj' href="https://ashraf2004.github.io/feedback/">Feedback</Nav.Link> 
          <NavDropdown className='adj' title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={sendEmail}>managepro@gmail.com</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className='adj' title="Plans" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Basic</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Premium</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Enterprise</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://ashraf2004.github.io/BootStarp-and-JavaScript/bootstrap/task_3.html">Take a Tour..</NavDropdown.Item>
          </NavDropdown>
          <div className="signature">Welcome! Get 𝓜𝓪𝓷𝓪𝓰𝓮𝓟𝓻𝓸 for free...</div>
          <Form inline className='formlogin' >
            {showUsername ? ( // Conditionally render username input
              <FormControl 
                type="text"
                placeholder="Username"
                className="mr-sm-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            ) : (
              <FormControl
                type="password"
                placeholder="Password"
                className="mr-sm-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
            <Button variant="primary" onClick={toggleInput}>
              {showUsername ? "Next" : "Log in"}
            </Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
