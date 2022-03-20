import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import plane from '../../modelimages/plane.jpg';

function Planestuff(props){
  return (
      <li>{props.name}</li>
  );
}

function Module2plane () {
  const inputRef = useRef(null)
  const [planeQuality, setplaneQuality] = useState([""]); 

  function updateList(){
    const newPlaneQuality = inputRef.current.value; 
    setplaneQuality([...planeQuality, newPlaneQuality]); 
  }
  return (
    <div>
      <div className='images'>
        <img src={plane} />
      </div>
      Can you describe why you said this was a plane?
      <ul>
        {planeQuality.map(planeQ => <Planestuff name = {planeQ}/>)}
      </ul>

      <div>
        <input ref = {inputRef} type="text"/>
      </div>
      
      <button onClick={updateList}> Update List </button>
      <div >
         <button onClick={ () =>  window.location.href='/module2-planeidentification'}> Continue </button>
      </div>
    </div>
  );
}

export default Module2plane;