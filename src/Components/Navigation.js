import '../App.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import UploadFile from './UploadFile'
import ImageSwapper from'./ImageSwapper'
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}


function Navigation() {
    const [login, setLogin] = useState(
        {
            loginParent:false,
            loginStudent:false,
            loginTeacher:false
        }

    )

    const [currentUserType, setCurrentUserType] = useState('');

    useEffect(() => {
        const url = currentUserType;
        const fetchData = async () => {
          try {
            const response = await fetch(url, {method: "POST",});
            const json = await response.json();
            console.log("Error from server"+json);
          } catch (error) {
            console.log("error", error);
          }
    };

    fetchData();
}, [currentUserType]);


    return (
        <>
        <Navbar bg="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ai-Like</Navbar.Brand>
          <Nav className="justify-content-end">
            {/*<Nav.Link href="#loginStudent">Student Login/Signup</Nav.Link>*/}
            {/*<Nav.Link href="#loginParent">Parent Login/Signup</Nav.Link>*/}
            {/*<Nav.Link href="#loginTeacher">Teacher Login/Signup</Nav.Link>*/}

              <NavDropdown title="Sign-In/Up" id="nav-dropdown">
                <NavDropdown.Item onClick={()=>setCurrentUserType('loginStudent')} eventKey="4.1">Student</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>setCurrentUserType('loginParent')} eventKey="4.2">Parent</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>setCurrentUserType('loginTeacher')} eventKey="4.3">Teacher</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
            <ImageSwapper />
            <UploadFile />
        </>
    );}
export default Navigation;
