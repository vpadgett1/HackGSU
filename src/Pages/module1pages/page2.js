import '../module1pages/module1styling/style.css';
import coding from '../../mod1images/coding.jpg';
import AI from '../../mod1images/AI.jpg'; 
function Module1Page2 () {

  return (
    <div>
      <div>
        <h2> What is the difference between computers and Artificial Intlligence? </h2>
      </div>
      <div >
      <p class='lead'>
      The things that computers do today are get instructions from humans and act based on it as some conditions are met but in reality they do not think about anything.
      <br/>
      But with AI, we just kind of give computer examples of what it needs to do and it thinks about its own instructions and acts on it.
      </p>
      </div>
      <div class='image'><img src={coding}/></div>
      <div class='image'><img src={AI}/></div>
    </div>
  );
}

export default Module1Page2;