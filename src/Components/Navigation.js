import '../App.css';
import React, {
} from 'react';

import { Link } from 'react-router-dom';
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigation = () => (
    <Navbar bg="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ai-Like</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#loginStudent">Student Login/Signup</Nav.Link>
            <Nav.Link href="#loginParent">Parent Login/Signup</Nav.Link>
            <Nav.Link href="#loginTeacher">Teacher Login/Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
);

export default Navigation;
