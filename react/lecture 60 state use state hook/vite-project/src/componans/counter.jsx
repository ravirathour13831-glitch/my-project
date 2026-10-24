
function Counter({ value, setValue }) {
  function increment() {
    setValue((prev) => prev + 1);
  }

  function decrement() {
    setValue((prev) => prev - 1);
  }

  return (
    <div>
      <h1>Counter</h1>

      <button onClick={increment}>+</button>

      <p>{value}</p>

      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
