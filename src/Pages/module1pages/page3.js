import '../module1pages/module1styling/style.css';
function Module1Page3 () {
  function movePage(){
    return window.location.href='/module1_pg4';
  }
  return (
    <div>
      <div>
        <h2> Types of AI </h2>
      </div>
      <div> There are two major versions of AI based on their domain</div>
      <div>
      <ul>       
        <li><strong> Artificial General Intelligence</strong> - <p class='lead'>It means AI is designed to work for any kind of problem.
</p></li>
        <li><strong> Artificial Narrow Intelligence</strong> - <p class='lead'>It means the AI is designed to work for a specific problem.
</p></li>
      </ul>
      </div>
      <br/>
      <button type="submit" onClick={movePage}>Continue</button>
    </div>
  );
}

export default Module1Page3;