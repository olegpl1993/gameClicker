import { useState } from "react";
import "./App.scss";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [selectButton, setselectButton] = useState("");
  const [clickTime, setClickTime] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const consoleArgs = () => {
    !isStart &&
      console.log("selectButton:", selectButton, "clickTime:", clickTime, "timeOut:", timeOut);
  };

  return (
    <div className="app">
      <p className="appTitle">Game Clicker</p>
      <button
        className="startButton"
        onClick={() => {
          consoleArgs();
          setIsStart(!isStart);
        }}
      >
        {isStart ? "STOP" : "START"}
      </button>
      <div className="comandList">
        <div className="row">
          <input
            className="selectButton"
            type="text"
            placeholder="Select button"
            onChange={(e) => setselectButton(e.target.value)}
          />
          <input
            type="number"
            placeholder="Click Time (ms)"
            min="0"
            step="any"
            onChange={(e) => setClickTime(e.target.value)}
          />
        </div>

        <div className="row">
          <input
            type="number"
            placeholder="Time out (ms)"
            min="0"
            step="any"
            onChange={(e) => setTimeOut(e.target.value)}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
