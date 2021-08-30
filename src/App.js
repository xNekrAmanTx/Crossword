import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { CharGridType, data } from "./constants/hardedData";
import { languages } from "./constants/locale";

const Crossword = ({ step, setStep }) => {
  const [matrix, setMatrix] = useState([[]]);
  const [isActive, setIsActive] = useState(false);
  const [rightTranslations, setRightTranslations] = useState([]);
  // const [userWord, setUserWord] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [taskWord, setTaskWord] = useState("");

  const [selectedCells, setSelectedCells] = useState([]);

  const userWord = useMemo(() => {
    return selectedCells.map(([j, _ ,i]) => matrix[i][j]).join('')
  }, [selectedCells])

  const turnOn = useCallback(() => {
    setIsActive(true);
  }, []);

  const turnOff = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleMouseDown = id => e => {
    turnOn();
    const item = e.target;
    setSelectedCells([id]);
  };

  const checkWord = () => {
    if (isActive) {
      // if (rightTranslations.some((str) => selectedCells.join(',') === str)) {
      if (rightTranslations.some((str) => userWord === str)) {
        alert(`YOU GOD DAMN RIGHT! *** ${userWord} *** - Good Job!`);
        setStep((step) => (step !== data.length - 1 ? step + 1 : -1));
      }
      turnOff();
    }
  };

  const handleMouseOver = id => e => {
    // const cell = e.target;
    // const prevCell = e.relatedTarget;
    if (isActive) {
      if (selectedCells[selectedCells.length - 2] === id) {
        setSelectedCells(selectedCells.slice(0, -1));
      } else if (selectedCells.includes(id)) checkWord();
      else {
        /* setSelectedCells({[id] : cell.textContent, ...selectedCells}); */
        setSelectedCells(selectedCells.concat(id));
      }
    }
  };

  useEffect(() => {
    setMatrix(data[step].character_grid);
    // setRightTranslations(Object.keys(data[step].word_locations));
    setRightTranslations(Object.values(data[step].word_locations));
    setSourceLanguage(data[step].source_language);
    setTargetLanguage(data[step].target_language);
    setTaskWord(data[step].word);
  }, [step]);

  useEffect(() => {
    isActive || setSelectedCells([]);
  }, [isActive]);

  return (
    <>
      <h1 className="crossword-number">{`Level ${step + 1}`}</h1>
      <div
        className="crossword-matrix"
        onMouseUp={checkWord}
        onMouseLeave={checkWord}
      >
        {matrix.map((row, i) => (
          <div className="row" key={i}>
            {row.map((el, j) => (
              <span
                className={`row__item ${
                  selectedCells.includes(j + "," + i) && "row__item_active"
                }`}
                key={j}
                onMouseDown={handleMouseDown(`${j},${i}`)}
                onMouseOver={handleMouseOver(`${j},${i}`)}
              >
                {el}
              </span>
            ))}
          </div>
        ))}
      </div>
      <h2 className="crossword-task">
        {`Translate word "${taskWord}" from ${languages[sourceLanguage]} to ${
          languages[targetLanguage]
        } <<${rightTranslations.join(`, `)}>>`}
      </h2>
    </>
  );
};

function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="App-main">
        {~step ? (
          <Crossword step={step} setStep={setStep} />
        ) : (
          <h1>You won. Congrats!</h1>
        )}
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
