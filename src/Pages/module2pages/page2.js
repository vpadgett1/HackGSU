import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import bird from '../../modelimages/bird.jpg';
import cat from '../../modelimages/cat.jpg';
import dog from '../../modelimages/dog.jpg';
import plane from '../../modelimages/plane.jpg';

function Module2Page2 () {

  return (
    <div>
      <div>
        <h2> Click on your favorite picture </h2>
      </div>
      <div className='images'>
        <img src={bird} onClick={() => window.location.href='/module2-bird'}/>
      </div>

      <div className='images'>
      <img src={cat} onClick={() => window.location.href='/module2-cat'}/>
      </div>

      <div className='images'>
      <img src={dog} onClick={() => window.location.href='/module2-dog'}/>
      </div>

      <div className='images'>
      <img src={plane} onClick={() => window.location.href='/module2-plane'}/>
      </div>

    </div>
  );
}

export default Module2Page2;