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
//import CreateAccountPage from './Pages/CreateAccountPage';
import Module1 from './Pages/module1'
import Module2Page1 from './Pages/module2pages/page1';
import Module2Page2 from './Pages/module2pages/page2';
import Module2bird from './Pages/module2pages/bird';
import Module2cat from './Pages/module2pages/cat';
import Module2dog from './Pages/module2pages/dog';
import Module2plane from './Pages/module2pages/plane';
import OnboardingPage from './Pages/onboarding';
import HomePage from './Pages/homepage';
import Navigation from './Components/Navigation';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
      <Navigation />
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/module_1" element={<Module1 />} />
        <Route exact path="/module2-page1" element={<Module2Page1 />} />
        <Route exact path="/module2-page2" element={<Module2Page2 />} />
        <Route exact path="/module2-bird" element={<Module2bird />} />
        <Route exact path="/module2-cat" element={<Module2cat />} />
        <Route exact path="/module2-dog" element={<Module2dog />} />
        <Route exact path="/module2-plane" element={<Module2plane />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
