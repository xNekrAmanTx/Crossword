import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { CharGridType, data } from "./constants/hardedData";

function App() {
  const [matrix, setMatrix] = useState([[]]);
  const [isActive, setIsActive] = useState(false);
  const [rightTranslations, setRightTranslations] = useState([]);
  const [userWord, setUserWord] = useState('');


  const turnOn = useCallback(() => {
    setIsActive(true)
  }, []);

  const turnOff = useCallback(() => {
    setIsActive(false)
  }, []);

  const handleMouseDown = (e) => {
    turnOn();
    const item = e.target;
    if (item.classList.contains("row__item")) {
      item.classList.add("row__item_active");
      setUserWord(item.textContent);
    };
  }

  const handleMouseUp = () => {
    console.log(userWord);
    isActive && rightTranslations.some(str => userWord === str) && alert(`*** ${userWord} *** - Good Job!`)
    turnOff();
  }
  
  const handleMouseOver = e => {
    const cell = e.target;
    const prevCell = e.relatedTarget;
    if (isActive) {
      if (cell.classList.contains("row__item_active")) {
        prevCell?.classList.remove("row__item_active");
        setUserWord(userWord.slice(0, -1))
      }
      else {
        cell.classList.add("row__item_active");
        setUserWord(userWord + cell.textContent);
      }
    }
  }

  // useEffect(()=>{
  //   const observer = new MutationObserver(function (mutations) {
  //     mutations.forEach(function (mutationRecord) {
  //       console.log(mutationRecord.target);
  //     });
  //   });
  //   observer.observe(document.getElementById('matrix0'), { attributes: true, subtree: true});
  // },[])

  useEffect(() => {
    setMatrix(data[3].character_grid);
    setRightTranslations(Object.values(data[3].word_locations))
  }, []);

  useEffect(() => {
    if (!isActive) {
      setUserWord('');
      [...document.getElementsByClassName("row__item")].forEach(el => {
        el.classList.remove("row__item_active");
      });
    }
  }, [isActive])

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="App-main">
        <div
          className="crossword-matrix"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {matrix.map((row, i) => (
            <div
              className="row"
              key={i}
            >
              {row.map((el, j) => (
                <span
                  className="row__item"
                  key={j}
                  onMouseOver={handleMouseOver}
                >
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
