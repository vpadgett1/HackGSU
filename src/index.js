/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import LandingPage from './Pages/landing';
//import CreateAccountPage from './Pages/CreateAccountPage';
import Module2Page1 from './Pages/module2pages/page1';
import Module2Page2 from './Pages/module2pages/page2';
import Module2bird from './Pages/module2pages/bird';
import OnboardingPage from './Pages/onboarding';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        {/* <Route path="/createAccount" element={<CreateAccountPage />} /> */}
        <Route exact path="/module2-page1" element={<Module2Page1 />} />
        <Route exact path="/module2-page2" element={<Module2Page2 />} />
        <Route exact path="/module2-bird" element={<Module2bird />} />

        <Route path="/onboarding" element={<OnboardingPage />} />

       
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
