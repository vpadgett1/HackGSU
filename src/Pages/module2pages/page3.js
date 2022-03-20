import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import what_you_described from '../../modelimages/what_you_described.jpg';


function Module2Page3 () {

  return (
    <div>
      <p>What you described earlier are called features of the image. They can be as simple as a line in the image or also be something as complex as a particular shape and color changes in an image.</p>

      <img className= "descriptions" src={what_you_described} />

      <div >
         <button onClick={ () =>  window.location.href='/module2-page4'}> Continue </button>
      </div>

    </div>
  );
}

export default Module2Page3;