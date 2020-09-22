import React from "react";
import styles from "./styles";

function Game({ setMode }) {
  function handleClick(mode) {
    setMode(mode);
  }

  return (
    <div className={styles}>
      <h1>Grid Puzzle</h1>
      <p>
        This mind-bending, brain-squeezing, neuron-twisting puzzle introduces a
        grid with 25 squares. To solve the puzzle, visit all squares!
      </p>
      <p>Choose from the following two difficulty levels.</p>
      <div className="modes">
        <div className="mode" onClick={() => handleClick("normal")}>
          <div className="heading">Normal Difficulty</div>
          <ul>
            <li>Start from any square</li>
            <li>Move 3 squares, vertical or horizontal</li>
            <li>Move 2 squares, diagonal</li>
          </ul>
          <button>Start Normal</button>
        </div>
        <div className="mode" onClick={() => handleClick("hard")}>
          <div className="heading">Hard Difficulty</div>
          <ul>
            <li>Start from center square</li>
            <li>Move 2 or 3 squares, vertical or horizontal</li>
            <li>No diagonal moves</li>
          </ul>
          <button>Start Hard</button>
        </div>
      </div>
    </div>
  );
}

export default Game;
