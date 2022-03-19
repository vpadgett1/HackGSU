import '../App.css';
import '../styling/LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Card, Button, CardGroup} from 'react-bootstrap'
import React, {
} from 'react';

const LandingPage = () => (
  <div className="landingPage">
    <div className="landingPageInfo">

      <Navbar bg="navbar" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Ai-Like</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Student Login/Signup</Nav.Link>
          <Nav.Link href="#features">Parent Login/Signup</Nav.Link>
          <Nav.Link href="#pricing">Teacher Login/Signup</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Card>
        <Card.Header className="whyAIMattersTitle">Why AI Matters</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

      <div class="functionalityCard">
        <h3>
          Why kids should learn about AI
        </h3>
        <div>
            AI has become increasingly important ...
          </div>
      </div>
   
      <div class="functionalityCard">
        <h3>
          Resources
        </h3>
        <div>
            ...
          </div>
      </div>
   

      <div className="whoWeAre">
        <div className="whoWeAreTitle">Creators</div>
        <div className="whoWeAreBody">
           ...

        </div>
        <div className="creatorLinks">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Jarred Cain</Card.Title>
                <Card.Text>
                  <div className="creatorLink">Github Link</div>
                  <div className="creatorLink">LinkedIn Link</div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title> Tori Padgett </Card.Title>
                <Card.Text>
                  <div className="creatorLink">Github Link</div>
                  <div className="creatorLink">LinkedIn Link</div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title> Abbaas Alif Mohamed Nishar </Card.Title>
                <Card.Text>
                  <div className="creatorLink">Github Link</div>
                  <div className="creatorLink">LinkedIn Link</div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title> Chihumeya Eresia-Eke </Card.Title>
                <Card.Text>
                  <div className="creatorLink">Github Link</div>
                  <div className="creatorLink">LinkedIn Link</div>
                </Card.Text>
              </Card.Body>
            </Card>

          </CardGroup>
          
        </div>

      </div>
    </div>

  </div>
);
export default LandingPage;
