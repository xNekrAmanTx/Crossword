import React, { useEffect, useState } from "react";
import "./App.css";
import { CharGridType, data } from "./constants/hardedData";

function App() {
  const [matrix, setMatrix] = useState([[]]);

  useEffect(() => {
    setMatrix(data[0].character_grid);
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="App-main">
        <div
          className="crossword-matrix"
          onMouseDown={(e) => {
            e.target.classList.toggle("row__item_active");
          }}
        >
          {matrix.map((row, i) => (
            <div className="row" key={i}>
              {row.map((el, j) => (
                <span className="row__item" key={j}>
                  {el}
                </span>
              ))}
            </div>
          ))}
        </div>
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
