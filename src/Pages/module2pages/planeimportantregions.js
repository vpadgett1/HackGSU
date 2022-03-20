import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import plane_cam from '../../modelimages/plane_cam.jpg';


function Module2_planeregions () {

  return (
    <div>
        <p>
        We can also see what are the important regions of the image that the AI identified. The AI focused on the wings regions of the plane. When comparing these to different types of planes it found that this plane is most likely a Wing. 
        </p>
        <img className= "descriptions1" src={plane_cam} />

      <div>
         <button onClick={ () =>  window.location.href='/module2-page3'}> Continue </button>
      </div>

    </div>
  );
}

export default Module2_planeregions;