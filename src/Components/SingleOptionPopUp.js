/* eslint-disable react/no-unused-prop-types */
import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';

const SingleOptionPopUp = (props) => {
  // deconstruct props
  const {
    message,
    buttonAction,
    buttonActionText,
  } = props;

  return (
    <div className="popUpBackground">
      <div className="popup">
        <div className="message">{message}</div>
        <div className="popup-buttons-single">
          <button onClick={buttonAction} type="button" className="leftButton">{buttonActionText}</button>
        </div>
      </div>
    </div>
  );
};

SingleOptionPopUp.propTypes = {
  message: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
  buttonActionText: PropTypes.string.isRequired,
};

export default SingleOptionPopUp;
