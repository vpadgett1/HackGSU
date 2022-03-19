/* eslint-disable react/no-unused-prop-types */
import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';

const PopUpMessage = (props) => {
  // deconstruct props
  const {
    continueText,
    doNotcontinueText,
    continueFunc,
    doNotContinueFunc,
    message,
  } = props;

  return (
    <div className="popUpBackground">
      <div className="popup">
        <div className="message">{message}</div>
        <div className="popup-buttons">
          <button onClick={doNotContinueFunc} type="button" className="leftButton">{doNotcontinueText}</button>
          <button onClick={continueFunc} type="button" className="rightButton">{continueText}</button>
        </div>
      </div>
    </div>
  );
};

PopUpMessage.propTypes = {
  continueText: PropTypes.string.isRequired,
  doNotcontinueText: PropTypes.string.isRequired,
  continueFunc: PropTypes.func.isRequired,
  doNotContinueFunc: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  isSingleButton: PropTypes.bool.isRequired,
};

export default PopUpMessage;
