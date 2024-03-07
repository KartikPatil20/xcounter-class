import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h5>Count: {count}</h5>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
