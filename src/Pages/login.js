import '../App.css';
import React, {
  useState,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import SingleOptionPopUp from '../Components/SingleOptionPopUp';
import {FormCheck} from "react-bootstrap";

const LoginPage = () => {
  // set state
  const [selectedButton, setSelectedButton] = useState('none');
  const [showMessage, setShowMessage] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();
  // deconstruct props

  // TODO: fetch data from backend
  useEffect(() => {
    // TODO: Render component
  }, []);

  const createStudentUserAccount = async () => {
  return (
    <div className="loginPage">
      <<div>Username:</div>
      <input type="text" placeholder="classroom_id" id="classroom_id" maxLength={100} />
      <div>Password:</div>
      <input type="text" placeholder="parent_name" id="parent_name" maxLength={100} />
      <div>Email Address:</div>
      <input type="text" placeholder="parent_email" id="parent_email" maxLength={100} />>
    </div>
  );
};

export default LoginPage;

// TODO: PropTypes
OnboardingPage.propTypes = {
  history: PropTypes.shape(
    { replace: PropTypes.func },
  ).isRequired,
};
