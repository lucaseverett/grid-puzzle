import React, { useState } from "react";
import styles from "./styles";
import Game from "../Game";
import Puzzle from "../Puzzle";

function App() {
  const [mode, setMode] = useState();

  return (
    <div className={styles}>
      {mode ? <Puzzle {...{ mode, setMode }} /> : <Game {...{ setMode }} />}
    </div>
  );
}

export default App;
