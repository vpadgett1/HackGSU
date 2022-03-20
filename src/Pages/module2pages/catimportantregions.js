import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import cat_cam from '../../modelimages/cat_cam.jpg';


function Module2_catregions () {

  return (
    <div>
        <p>
        We can also see what are the important regions of the image that the AI identified. The AI focused on the eyes and ear regions of the cat and the stripes of the cat. When comparing these to different types of cats it found that this cat is most likely an Egyptian Cat. 
        </p>
        <img className= "descriptions1" src={cat_cam} />

      <div>
         <button onClick={ () =>  window.location.href='/module2-page3'}> Continue </button>
      </div>

    </div>
  );
}

export default Module2_catregions;