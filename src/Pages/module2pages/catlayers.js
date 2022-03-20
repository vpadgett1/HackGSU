import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import catlayers from '../../modelimages/catlayers.jpg';


function Module2catlayers () {

  return (
    <div>
      <img className= "descriptions" src={catlayers} />

      <div >
         <button onClick={ () =>  window.location.href='/module2-catregions'}> Continue </button>
      </div>

    </div>
  );
}

export default Module2catlayers;