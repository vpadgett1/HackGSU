import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import dog_cam from '../../modelimages/dog_cam.jpg';


function Module2_dogregions () {

  return (
    <div>
        <p>
        We can also see what are the important regions of the image that the AI identified. The AI focused on the nose and mouth regions of the dog. When comparing these to different types of dogs it found that this dog is most likely a Standard Poodle. 
        </p>
        <img className= "descriptions1" src={dog_cam} />

      <div>
         <button onClick={ () =>  window.location.href='/module2-page3'}> Continue </button>
      </div>

    </div>
  );
}

export default Module2_dogregions;