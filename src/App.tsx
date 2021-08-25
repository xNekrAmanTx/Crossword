import React, { useEffect, useState } from "react";
import "./App.css";
import {data} from "./constants/hardedData";

function App() {
  const [matrix, setMatrix] = useState([[]]);

  useEffect(() => {
    setMatrix(data.character_grid);
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="main">
        <table>
          {matrix.map((row, i) => {
            <tr>
              {row.map((el,j) => {
                <td>
                  {el}
                </td>
              })}
            </tr>
          })}
        </table>
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
