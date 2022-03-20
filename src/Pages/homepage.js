import '../App.css';
//import '../styling/LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Card, Button, CardGroup} from 'react-bootstrap'
import ai_image from '../images/ai_hackgsu.jpg';
import brain from '../images/brain.jpg';
import React, {
} from 'react';

const HomePage = () => (
    <div className="HomePage">
        <div className="HomepagePageInfo">
            <div className = "cardgroup">
                <CardGroup>
                    <Card border="secondary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ai_image} style={{width: '18rem', height: '18rem', margin:'auto'}}/>
                        <Card.Body> 
                            <Card.Header>Module #1</Card.Header>
                            <Card.Title>What is Artifical Intellegence?</Card.Title>
                            <Card.Text>
                            Learn the Important Words You Need to Know Before Working with AI. 
                            </Card.Text>
                            <Card.Link href="/module1_pg1">Click Here to Begin Learning!</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card border="secondary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={brain} style={{height: '18rem', margin:'auto'}}/>
                        <Card.Body> 
                            <Card.Header>Module #2</Card.Header>
                            <Card.Title>Let's See a Visual Example</Card.Title>
                            <Card.Text>
                            View A Working Visual with Explainations on how AI recongizes objects. 
                            </Card.Text> 
                            <Card.Link href="/module2-page1">Click Here to Begin Learning!</Card.Link>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    </div>
);
export default HomePage;