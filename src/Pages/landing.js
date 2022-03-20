import '../App.css';
import '../styling/LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Card, Button, CardGroup} from 'react-bootstrap'
import tori from '../images/tori.jpg';
import abbaas from '../images/abbaas.jpg';
import chihumeya from '../images/chihumeya.jpg';
import jarred from '../images/jarred.jpg';
import React, {
} from 'react';

const LandingPage = () => (
  <div className="landingPage">
    <div className="landingPageInfo">

      <Navbar bg="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ai-Like</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/loginStudent">Student Login/Signup</Nav.Link>
            <Nav.Link href="/loginParent">Parent Login/Signup</Nav.Link>
            <Nav.Link href="/loginTeacher">Teacher Login/Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Card>
        <Card.Header className="whyAIMattersTitle">Why AI Matters</Card.Header>
        <Card.Body>
          <Card.Text>
          Artificial Intelligence is the art of teaching computers to ‘think’ and solve problems on their own. We show examples to the computer rather than giving it the steps to solve a problem. 
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
        <div className="whoWeAreTitle">
          <h5>Creators</h5>
        </div>
        <div className="whoWeAreBody">
           

        </div>
        <div className="creatorLinks">
          <CardGroup>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <img className = "creatorPictures" src={jarred}/>
              <Card.Body>
                <Card.Title>Jarred Cain</Card.Title>
                <Card.Text>
                  <div className="creatorLink">
                      <a href="https://github.com/jarrywc">Github Link</a>
                  </div>
                  <div className="creatorLink">
                    <a href="https://www.linkedin.com/in/jarred-cain/">LinkedIn Link</a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              {/* <Card.Img variant="top" src={tori} /> */}
              <img className = "creatorPictures" src={tori}/>
              <Card.Body>
                <Card.Title> Tori Padgett </Card.Title>
                <Card.Text>
                  <div className="creatorLink">
                      <a href="https://github.com/vpadgett1">Github Link</a>
                  </div>
                  <div className="creatorLink">
                    <a href="https://www.linkedin.com/in/victoria-padgett-2021/">LinkedIn Link</a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              {/* <Card.Img variant="top" src={abbaas} /> */}
              <img className = "creatorPictures" src={abbaas}/>
              <Card.Body>
                <Card.Title> Abbaas Alif Mohamed Nishar </Card.Title>
                <Card.Text>
                  <div className="creatorLink">
                      <a href="https://github.com/abbaasalif">Github Link</a>
                  </div>
                  <div className="creatorLink">
                    <a href="https://www.linkedin.com/in/abbaas-alif-mohamed-nishar-a04227122/">LinkedIn Link</a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              {/* <Card.Img variant="top" src={chihumeya} /> */}
              <img className = "creatorPictures" src={chihumeya}/>
              <Card.Body>
                <Card.Title> Chihumeya Eresia-Eke </Card.Title>
                <Card.Text>
                  <div className="creatorLink">
                    <a href="https://github.com/ChihumeyaEE">Github Link</a>
                  </div>
                  <div className="creatorLink">
                    <a href="https://www.linkedin.com/in/chihumeya-eresia-eke/">LinkedIn Link</a>
                  </div>
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
