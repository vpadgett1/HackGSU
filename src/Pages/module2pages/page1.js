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

function Module2Page1 () {
  let birdvar = "bird";
  const birdRef = useRef(null)
  const catRef = useRef(null)
  const dogRef = useRef(null)
  const planeRef = useRef(null)

  function checkWord(){
    const birdvar = birdRef.current.value; 
    const catvar = catRef.current.value; 
    const dogvar = dogRef.current.value; 
    const planevar = planeRef.current.value; 
    if (birdvar.toLowerCase() != "bird" || catvar.toLowerCase() != "cat" || dogvar.toLowerCase() != "dog" || planevar.toLowerCase() != "plane" ){
      alert("Try Again")
    }else{
      return window.location.href='/module2-page2'; 
    }
  }

  return (
    <div>
      <div>
        <h2> Can you guess what are in these pictures? </h2>
      </div>
      <div className='images'>
        <img src={bird}/>
      </div>
      <div>
        <input ref = {birdRef} type="text"/>
      </div>

      <div className='images'>
        <img src={cat}/>
      </div>
      <div>
        <input ref = {catRef} type="text"/>
      </div>

      <div className='images'>
        <img src={dog}/>
      </div>
      <div>
        <input ref = {dogRef} type="text"/>
      </div>

      <div className='images'>
        <img src={plane}/>
      </div>
      <div>
        <input ref = {planeRef} type="text"/>
      </div>

      <button onClick={checkWord}> Continue </button>

    </div>
  );
}

export default Module2Page1;