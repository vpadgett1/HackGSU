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
        <p>There are several advantages of using AI, one of them being it reduces human error. As a result, they are much more reliable and efficient in the way they work. Due to this, AI will change the job nature in all the fields as they will automate or aid in processes that are prone to errors or require careful attention.</p>
        <p>Since AI is an integral part of our life, kids need to learn AI. It will give them better insights at how our everyday products that run AI work. PwC (Price Waterhouse Corporation) expects that AI would potentially contribute to the global economy.</p>
        <p>Also, that would mean that it would contribute to 45% of the total economic gains by 2030. Experts in Finance and AI say that ignoring AI is similar to ignoring the internet in the late 20th century. It is also believed that the current AI systems are heavily biased and as the generation that is going to develop the next AI systems.
        </p>
          </div>
      </div>
   
      <div class="functionalityCard">
        <h3>
          More Resources
        </h3>
        <div>
            <a href="https://www.aiforanyone.org/"> AI For Anyone</a>
            <br/>
            <a href="https://www.preface.ai/blog/kids-learning/ai-for-kids/"> The Ultimate Guide for Artificial Intelligence (AI) for Kids </a>
            <br/>
            <a href="https://www.youtube.com/watch?v=OPWj3cxJIHw&ab_channel=DataScienceandAIforKids"> How to Explain Artificial Intelligence (AI) to Kids in under 3 minutes. </a>
            <br/>
            <a href="https://www.create-learn.us/ai-for-kids"> Artificial Intelligence For Kids </a>
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
