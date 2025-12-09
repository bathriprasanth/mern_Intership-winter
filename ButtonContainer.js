const ButtonContainer = ({handleIncrement,handleDecrement}) => {
  return (
    <div>
      <button className="inc" onClick={handleIncrement}>
        Increment
      </button>
      <button className="dec" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default ButtonContainer;