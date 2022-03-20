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
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
