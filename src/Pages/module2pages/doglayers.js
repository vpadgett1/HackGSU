import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import doglayers from '../../modelimages/doglayers.jpg';


function Module2doglayers () {

  return (
    <div>
      <img className= "descriptions" src={doglayers} />

      <div >
         <button onClick={ () =>  window.location.href='/module2-dogregions'}> Continue </button>
      </div>

    </div>
  );
}

export default Module2doglayers;