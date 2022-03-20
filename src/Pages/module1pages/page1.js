import '../module1pages/module1styling/style.css';
import AI from '../../mod1images/AI.jpg';
function Module1Page1 () {
    let 

  return (
    <div>
      <div>
        <h2> Introduction to Aritificial Intelligence </h2>
      </div>
      <div >
        <h3>What is Artificial?</h3>
        <br/>
        <br/>
        <p class='lead'> Artificial is defined as <em>made or produced by human beings</em> rather than occurring naturally, especially as a copy of something natural. Eg: <strong>Decorative Flowers</strong>, <strong>Light Bulbs</strong>, <strong>Computers</strong></p>
      </div>
      <div >
        <h3>What is Intelligence?</h3>
        <br/>
        <br/>
        <p class='lead'> The ability to <em> think, innovate and acquire and apply knowledge and skills. </em> </p>
      </div>
      <div >
        <h3>What is Aritificial Intelligence?</h3>
        <br/>
        <br/>
        <p class='lead'> A man made entity or object that has intelligence. </p>
      </div>
      <div className='images'>
        <img src={AI}/>
      </div>
    </div>
  );
}

export default Module1Page1;