const Counter = ({ item, handleIncrement, handleDecrement, count }) => {
  return (
    <div className="counter">
      <button
        onClick={() => handleDecrement(item)}
        disabled={count === 0 ? "disabled" : null}
      >
        -
      </button>
      <p>{count}</p>
      <button onClick={() => handleIncrement(item)}>+</button>
    </div>
  );
};

export default Counter;
