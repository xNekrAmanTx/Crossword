import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { CharGridType, data } from "./constants/hardedData";


const Crossword = ({step, setStep}) => {
  const [matrix, setMatrix] = useState([[]]);
  const [isActive, setIsActive] = useState(false);
  const [rightTranslations, setRightTranslations] = useState([]);
  const [userWord, setUserWord] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [taskWord, setTaskWord] = useState('');
  
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
    if (isActive) {
      if (rightTranslations.some(str => userWord === str)) {
        alert(`YOU GOD DAMN RIGHT! *** ${userWord} *** - Good Job!`);
        setStep(step => step !== data.length - 1 ? step + 1 : -1);
      }
      turnOff();
    }
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

  useEffect(() => {
    setMatrix(data[step].character_grid);
    setRightTranslations(Object.values(data[step].word_locations));
    setSourceLanguage(data[step].source_language);
    setTargetLanguage(data[step].target_language);
    setTaskWord(data[step].word);
  }, [step]);

  useEffect(() => {
    if (!isActive) {
      setUserWord('');
      [...document.getElementsByClassName("row__item")].forEach(el => {
        el.classList.remove("row__item_active");
      });
    }
  }, [isActive])

  return(
  <>
        <h1 className="crossword-number">
          {`Level ${step + 1}`}
        </h1>
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
        <h2 className="crossword-task">
          {`Translate word "${taskWord}" from ${sourceLanguage} to ${targetLanguage}   ... <<${rightTranslations.join(`, `)}>>`}
        </h2>
        </>
  )
}

function App() {

  const [step, setStep] = useState(0);


  // useEffect(()=>{
  //   const observer = new MutationObserver(function (mutations) {
  //     mutations.forEach(function (mutationRecord) {
  //       console.log(mutationRecord.target);
  //     });
  //   });
  //   observer.observe(document.getElementById('matrix0'), { attributes: true, subtree: true});
  // },[])


  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="App-main">
        {
        ~step ?
        <Crossword step={step} setStep={setStep}/>
        :
        <h1>
          You won. Congrats!
        </h1>
        }
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
