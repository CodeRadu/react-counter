import "./App.css";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [clicks, setClicks] = useLocalStorage("countr-count", 0);
  function addClick() {
    setClicks(+clicks + 1);
  }
  function reset() {
    setClicks(0);
  }
  return (
    <div className="container">
      <h4>Counter</h4>
      <button className="waves-effect waves-light btn" onClick={addClick}>
        Clicked {clicks} times
      </button>
      <br />
      <button className="waves-effect waves-light btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
