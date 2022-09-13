

const Counter = ({ item, handleDecrement, handleIncrement, count }) => {
  return (
    <div className="counter">
      <button onClick={() => handleDecrement(item)}  disabled={item.count <= 0 ? "disabled" : null}>-</button>
      <p>{item.count}</p>
      <button onClick={() => handleIncrement(item)}>+</button>
    </div>
  );
};

export default Counter;
