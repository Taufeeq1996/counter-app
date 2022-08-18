import './App.css';
import React,{useState} from 'react';

function App() {
  let numInput = React.createRef();
  const [count, setCount] = useState(0);

  const increase  = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    setCount(count - 1);
  }
  const increment = () => {
    setCount(count + Number(numInput.current.value));
  }
  const zero = () => {
    setCount(0)
  }
  return (
    <div className = "App">
      <h1>{count}</h1>
     <button onClick={increase}>+1</button>
     <button onClick={decrease}>-1</button>
     <button onClick={increment}>Increment by</button>
     <input type="number" ref = {numInput}/>
     <button onClick={zero}>0</button>
    </div>
  );
}

export default App;
