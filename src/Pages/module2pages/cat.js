import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import cat from '../../modelimages/cat.jpg';

function Catstuff(props){
  return (
      <li>{props.name}</li>
  );
}

function Module2cat () {
  const inputRef = useRef(null)
  const [catQuality, setcatQuality] = useState([""]); 

  function updateList(){
    const newCatQuality = inputRef.current.value; 
    setcatQuality([...catQuality, newCatQuality]); 
  }
  return (
    <div>
      <div className='images'>
        <img src={cat} />
      </div>
      Can you describe why you said this was a cat?
      <ul>
        {catQuality.map(catQ => <Catstuff name = {catQ}/>)}
      </ul>

      <div>
        <input ref = {inputRef} type="text"/>
      </div>
      
      <button onClick={updateList}> Update List </button>
      <div >
         <button onClick={ () =>  window.location.href='/module2-catidentification'}> Continue </button>
      </div>
    </div>
  );
}

export default Module2cat;