import "./App.css";
import ButtonContainer from './ButtonContainer'

const Counter = ({ val, handleIncrement, handleDecrement }) => {
    let v = null;
    if(val < 0){
        v = <p>Negative Value</p>
    }
    else{
        v =   <p>positive Value</p>
    }
  return (
    <div className="counter">
      <h1>{val}</h1>
      {v}
      <ButtonContainer handleIncrement = {handleIncrement} handleDecrement = {handleDecrement} />
    </div>
  );
};

export default Counter;