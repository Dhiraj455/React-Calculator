import './App.css';
import React,{useState} from 'react';

function App() {
  const [result,setResult] = useState("")
  const handle=(e)=> {
    setResult(result.concat(e.target.name));
  }
  const clear=()=>{
    setResult("");
  }
  const back=()=>{
    setResult(result.slice(0,-1))
  }
  const total=()=>{
    try{
      setResult(eval(result).toString())
    }
    catch(err){
      setResult("Error")
    }
  }
  return (
    <div className="all">
      <h1>Magic Calculator</h1>
    <div className="container">
      <form>
        <input type="text" value={result}></input>
      </form>
      <div className="keys">
        <button className="highlight" onClick={clear} id="clear">Clear</button>
        <button className="highlight" onClick={back} id="back">C</button>
        <button className="highlight" onClick={handle} name="/">&divide;</button>
        <button onClick={handle} name="7">7</button>
        <button onClick={handle} name="8">8</button>
        <button onClick={handle} name="9">9</button>
        <button className="highlight" onClick={handle} name="*">&times;</button>
        <button onClick={handle} name="6">6</button>
        <button onClick={handle} name="5">5</button>
        <button onClick={handle} name="4">4</button>
        <button className="highlight" onClick={handle} name="-">&ndash;</button>
        <button onClick={handle} name="3">3</button>
        <button onClick={handle} name="2">2</button>
        <button onClick={handle} name="1">1</button>
        <button className="highlight" onClick={handle} name="+">+</button>
        <button onClick={handle} name="0">0</button>
        <button onClick={handle} name=".">.</button>
        <button className="highlight" onClick={total} id="result">=</button>
      </div>
    </div>
    </div>
  );
}

export default App;
