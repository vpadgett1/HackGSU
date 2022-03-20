/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import LandingPage from './Pages/landing';
import LoginStudent from './Pages/loginStudent'
//import CreateAccountPage from './Pages/CreateAccountPage';
import Module1 from './Pages/module1'
import Module1Page1 from './Pages/module1pages/page1';
import Module1Page2 from './Pages/module1pages/page2';
import Module1Page3 from './Pages/module1pages/page3';
import Module1Page4 from './Pages/module1pages/page4';
import Module2Page1 from './Pages/module2pages/page1';
import Module2Page2 from './Pages/module2pages/page2';
import Module2bird from './Pages/module2pages/bird';
import Module2cat from './Pages/module2pages/cat';
import Module2dog from './Pages/module2pages/dog';
import Module2plane from './Pages/module2pages/plane';
import Module2_birdidentification from './Pages/module2pages/birdidentification';
import Module2_catidentification from './Pages/module2pages/catidentification';
import Module2_dogidentification from './Pages/module2pages/dogidentification';
import Module2_planeidentification from './Pages/module2pages/planeidentification';
import Module2catlayers from './Pages/module2pages/catlayers';
import Module2doglayers from './Pages/module2pages/doglayers';
import Module2birdlayers from './Pages/module2pages/birdlayers';
import Module2planelayers from './Pages/module2pages/planelayers';

import Module2catregions from './Pages/module2pages/catimportantregions';
import Module2birdregions from './Pages/module2pages/birdimportantregions';
import Module2planeregions from './Pages/module2pages/planeimportantregions';
import Module2dogregions from './Pages/module2pages/dogimportantregions';

import Module2Page3 from './Pages/module2pages/page3';
import Module2Page4 from './Pages/module2pages/page4';
import Mod1Quiz from './Pages/mod1_quiz1';
import Mod2Quiz from './Pages/mod2_quiz';
import OnboardingPage from './Pages/onboarding';
import HomePage from './Pages/homepage';
import Navigation from './Components/Navigation';
import './index.css';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


ReactDOM.render(
  <React.StrictMode>

    <Router>
        <Navigation />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/loginStudent" element={<LoginStudent />} />
        <Route path="/module_1" element={<Module1 />} />
        <Route path="/module1_pg1" element={<Module1Page1 />} />
        <Route path="/module1_pg2" element={<Module1Page2 />} />
        <Route path="/module1_pg3" element={<Module1Page3 />} />
        <Route path="/module1_pg4" element={<Module1Page4 />} />
        <Route exact path="/module2-page1" element={<Module2Page1 />} />
        <Route exact path="/module2-page2" element={<Module2Page2 />} />
        <Route exact path="/module2-bird" element={<Module2bird />} />
        <Route exact path="/module2-cat" element={<Module2cat />} />
        <Route exact path="/module2-dog" element={<Module2dog />} />
        <Route exact path="/module2-plane" element={<Module2plane />} />
        <Route exact path="/module2-page3" element={<Module2Page3 />} />
        <Route exact path="/module2-page4" element={<Module2Page4 />} />
        <Route exact path="/module2-birdidentification" element={<Module2_birdidentification />} />
        <Route exact path="/module2-catidentification" element={<Module2_catidentification />} />
        <Route exact path="/module2-dogidentification" element={<Module2_dogidentification />} />
        <Route exact path="/module2-planeidentification" element={<Module2_planeidentification />} />
        <Route exact path="/module2-catlayers" element={<Module2catlayers />} />
        <Route exact path="/module2-birdlayers" element={<Module2birdlayers />} />
        <Route exact path="/module2-doglayers" element={<Module2doglayers />} />
        <Route exact path="/module2-planelayers" element={<Module2planelayers />} />
        <Route exact path="/module2-catregions" element={<Module2catregions />} />
        <Route exact path="/module2-birdregions" element={<Module2birdregions />} />
        <Route exact path="/module2-planeregions" element={<Module2planeregions />} />
        <Route exact path="/module2-dogregions" element={<Module2dogregions />} />


        <Route path="/mod1quiz" element={<Mod1Quiz />} />
        <Route path="/mod2quiz" element={<Mod2Quiz />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
