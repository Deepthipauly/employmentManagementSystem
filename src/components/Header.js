import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>


<Navbar bg="dark" variant="dark">
        <Container>
        <Link to={''} style={{textDecoration:'none',color:'whitesmoke'}} ><i class="fa-solid fa-person m-2 fs-4"></i></Link>
          <Link to={''} style={{textDecoration:'none',color:'whitesmoke'}} ><Navbar.Brand href="#home">Employee Management</Navbar.Brand></Link>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header