import '../App.css';
import React, {
  // useState,
  useEffect,
} from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// this line will become const LandingPageNavigation = (props) => { once there are props
const LandingPageNavigation = () => {
  // set state
  // const [state, setState] = useState(value);

  // deconstruct props
  // const [props] = props;

  // TODO: fetch data from backend
  useEffect(() => {

  }, []);

  // TODO: Render component
  return (
    <>
      <Link to="/createAccount">Create Account</Link>
      <Link to="/discover">Log in</Link>
    </>
  );
};

// TODO: PropTypes
LandingPageNavigation.propTypes = {

};

export default LandingPageNavigation;
