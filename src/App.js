import React, { useEffect, useState } from "react";
import "./App.css";
import { CharGridType, data } from "./constants/hardedData";

function App() {
  const [matrix, setMatrix] = useState([[]]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setMatrix(data[0].character_grid);
  }, []);

  useEffect(() => {
    isActive || [...document.getElementsByClassName("row__item")].forEach(el => el.classList.remove("row__item_active"))
  }, [isActive])

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="App-main">
        <div
          className="crossword-matrix"
          onMouseDown={(e) => {
            setIsActive(true);
            const item = e.target;
            if(item.classList.contains("row__item")) item.classList.add("row__item_active")
          }}

          onMouseUp={(e) => {
            setIsActive(false);
            const matr = e.currentTarget;
            const cell = e.target;
            console.log('matrica =', matr);
            console.log('cell =', cell);
            // [...matr.children].forEach(row => {
            //   [...row].forEach( cell => cell.classlist.remove("row__item_active"))
            // })
          }}

          // onMouseOut={(e) => {
          //   setIsActive(false);
          // }}
          
          onMouseOver={e => {
            const cell = e.target;
            if(cell.classList.contains("row__item"))
            {if(isActive) {
              cell.onclick = (ev) => {ev.target.classList.add("row__item_active")}; 
              cell.classList.toggle("row__item_active")
            }
            else cell.onclick = null;}
          }
          }
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
