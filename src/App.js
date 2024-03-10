import './App.css';
import React, {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      count : 0
    }
  }

  incrementCounter = () => {
    this.setState(prevState => ({
      count : prevState.count + 1
    }));
  }

  decrementCounter = () => {
    this.setState(prevState => ({
      count : prevState.count - 1
    }))
  }

  render(){
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h5>Count: {this.state.count}</h5>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}


/*function App() {

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
}*/

export default App;
