import "./App.css";
import Counter from "./components/Counter";
import FuncCounter from "./components/FuncCounter";

function App() {
  return (
    <div className="App">
      <h1>Class Counter</h1>
      <Counter></Counter>
      <h1>Functional Counter</h1>
      <FuncCounter></FuncCounter>
    </div>
  );
}

export default App;
