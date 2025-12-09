// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import Grandfather from './Grandfather';
import Counter from "./Counter";

function App() {
  let [val, setVal] = useState(0);

  const handleIncrement = () => {
    setVal(val + 1);
  };
  const handleDecrement = () => {
    setVal(val - 1);
  };
  return (
    <div className="App">
      <h1>Invincible</h1>
      <Counter
        val={val}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      ></Counter>
    </div>
  );
}
export default App;
