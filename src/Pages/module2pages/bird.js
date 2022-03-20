import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import bird from '../../modelimages/bird.jpg';

function Birdstuff(props){
  return (
      <li>{props.name}</li>
  );
}

function Module2bird () {
  const inputRef = useRef(null)
  const [birdQuality, setbirdQuality] = useState([""]); 

  function updateList(){
    const newBirdQuality = inputRef.current.value; 
    setbirdQuality([...birdQuality, newBirdQuality]); 
  }
  return (
    <div>
      <div className='images'>
        <img src={bird} />
      </div>
      Can you describe why you said this was a bird?
      <ul>
        {birdQuality.map(birdQ => <Birdstuff name = {birdQ}/>)}
      </ul>

      <div>
        <input ref = {inputRef} type="text"/>
      </div>
      
      <button onClick={updateList}> Update List </button>
      <div >
         <button onClick={ () =>  window.location.href='/module2-birdidentification'}> Continue </button>
      </div>
    </div>
  );
}

export default Module2bird;