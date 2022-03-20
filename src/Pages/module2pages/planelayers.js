import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import planelayers from '../../modelimages/planelayers.jpg';


function Module2planelayers () {

  return (
    <div>
      <img className= "descriptions" src={planelayers} />

      <div >
         <button onClick={ () =>  window.location.href='/module2-planeregions'}> Continue </button>
      </div>

    </div>
  );
}

export default Module2planelayers;