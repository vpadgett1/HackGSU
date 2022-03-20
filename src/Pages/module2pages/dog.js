import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import dog from '../../modelimages/dog.jpg';

function Dogstuff(props){
  return (
      <li>{props.name}</li>
  );
}

function Module2dog () {
  const inputRef = useRef(null)
  const [dogQuality, setdogQuality] = useState([""]); 

  function updateList(){
    const newDogQuality = inputRef.current.value; 
    setdogQuality([...dogQuality, newDogQuality]); 
  }
  return (
    <div>
      <div className='images'>
        <img src={dog} />
      </div>
      Can you describe why you said this was a dog?
      <ul>
        {dogQuality.map(dogQ => <Dogstuff name = {dogQ}/>)}
      </ul>

      <div>
        <input ref = {inputRef} type="text"/>
      </div>
      
      <button onClick={updateList}> Update List </button>
        <div >
         <button onClick={ () =>  window.location.href='/module2-dogidentification'}> Continue </button>
      </div>
    </div>
  );
}

export default Module2dog;