import '../module1pages/module1styling/style.css';
import autonomous from '../../mod1images/autonomous.jpg';
import roomba from '../../mod1images/roomba.jpg';
import diagnosis from '../../mod1images/diag.jpg';
function Module1Page4 () {

  return (
    <div>
      <div>
        <h2> Examples of AI </h2>
      </div>
      <div><h3> There are two major versions of AI based on their domain </h3></div>
      <div>
      <ul>       
        <li><strong> Autonomous Driving</strong> - <p class='lead'>Cars driving by itself.
</p></li>
        <li><strong> Automatic Robot Vacuums: </strong> - <p class='lead'> The robots that are capable of cleaning your house by moving around and detecting dust.
</p></li>
<li><strong> AI for medical diagnosis: </strong> - <p class='lead'> We can detect different health conditions just by feeding the data into AI systems and sometimes these systems work more accurately than humans at medical diagnosis.
</p></li>
      </ul>
      </div>
      <div class='image'><img src={autonomous}/></div>
      <div class='image'><img src={roomba}/></div>
      <div class='image'><img src={diagnosis}/></div>
    </div>
  );
}

export default Module1Page4;