import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import bird_cam from '../../modelimages/bird_cam.jpg';


function Module2_birdregions () {

  return (
    <div>
        <p>
        We can also see what are the important regions of the image that the AI identified. The AI focused on the eyes and ear regions of the bird. When comparing these to different types of bird it found that this bird is most likely a Robin. 
        </p>
        <img className= "descriptions1" src={bird_cam} />

      <div>
         <button onClick={ () =>  window.location.href='/module2-page3'}> Continue </button>
      </div>

    </div>
  );
}

export default Module2_birdregions;