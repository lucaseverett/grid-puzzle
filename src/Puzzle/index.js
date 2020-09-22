import React, { useEffect, useState } from "react";
import styles from "./styles";

function initialSquares(mode) {
  return mode === "normal"
    ? [
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
        [, "possible"],
      ]
    : [
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, "possible"],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
        [, ""],
      ];
}

function setCurrent(arr, currentStep, nextSquare) {
  arr.map((s) => {
    s[1] = "";
    return s;
  });
  arr[nextSquare] = [currentStep, "current"];
  return arr;
}

const rows = [
  [1, 5],
  [6, 10],
  [11, 15],
  [16, 20],
  [21, 25],
];

const columns = [
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [5, 10, 15, 20, 25],
];

// memoize possible squares
const possibleSquares = { normal: {}, hard: {} };

function normalMode(nextSquare) {
  if (possibleSquares["normal"][nextSquare])
    return possibleSquares["normal"][nextSquare];

  const diagonals = [
    [-8, 12],
    [-8, 12],
    [-12, -8, 8, 12],
    [-12, 8],
    [-12, 8],
  ];

  const diagonal = (() => {
    const column = columns.findIndex((c) => c.includes(nextSquare + 1));
    return diagonals[column].map((n) => nextSquare + n);
  })();

  const horizontal = [-3, 3]
    .filter((n) => {
      const check = rows.some(([min, max]) => {
        if (
          nextSquare + 1 >= min &&
          nextSquare + 1 <= max &&
          (n + nextSquare + 1 > max || n + nextSquare + 1 < min)
        ) {
          return true;
        }
      });
      if (check) {
        return false;
      }
      return true;
    })
    .map((n) => nextSquare + n);

  const vertical = [-15, 15].map((n) => nextSquare + n);

  const allPossible = [...diagonal, ...horizontal, ...vertical];

  possibleSquares[nextSquare] = allPossible;

  return allPossible;
}

function hardMode(nextSquare) {
  if (possibleSquares["hard"][nextSquare])
    return possibleSquares["hard"][nextSquare];

  const horizontal = [-3, -2, 2, 3]
    .filter((n) => {
      const check = rows.some(([min, max]) => {
        if (
          nextSquare + 1 >= min &&
          nextSquare + 1 <= max &&
          (n + nextSquare + 1 > max || n + nextSquare + 1 < min)
        ) {
          return true;
        }
      });
      if (check) {
        return false;
      }
      return true;
    })
    .map((n) => nextSquare + n);

  const vertical = [-15, -10, 10, 15].map((n) => nextSquare + n);

  const allPossible = [...horizontal, ...vertical];

  possibleSquares[nextSquare] = allPossible;

  return allPossible;
}

function findPossible(arr, nextSquare, mode) {
  return arr.map((s, index) => {
    if (s[1] !== "current") {
      if (s[0]) {
        s[1] = "filled";
      } else if (mode(nextSquare).includes(index) && !s[0]) {
        s[1] = "possible";
      } else {
        s[1] = "";
      }
    }
    return s;
  });
}

function App({ mode, setMode }) {
  const [squares, setSquares] = useState(initialSquares(mode));
  const [squareHistory, setSquareHistory] = useState([initialSquares(mode)]);

  const currentStep = squareHistory.length || 1;

  const win = currentStep === 25 + 1;

  const fail = !squares.some((s) => s[1] === "possible") && !win;

  function handleClick(classList, nextSquare) {
    if (classList.contains("possible")) {
      let currentSquares = JSON.parse(JSON.stringify(squares));
      let nextSquares = [
        ...findPossible(
          setCurrent(currentSquares, currentStep, nextSquare),
          nextSquare,
          mode === "normal" ? normalMode : hardMode
        ),
      ];
      setSquareHistory([...squareHistory, nextSquares]);
      setSquares(nextSquares);
    }
  }

  function undoMove() {
    setSquares(squareHistory[squareHistory.length - 2]);
    setSquareHistory((arr) => [...arr.slice(0, arr.length - 1)]);
  }

  function startOver() {
    setSquares(initialSquares(mode));
    setSquareHistory([squareHistory[0]]);
  }

  function newGame() {
    setMode();
  }

  return (
    <div
      className={[styles, fail ? "fail" : null, win ? "win" : null].join(" ")}
    >
      <ul>
        {squares.map((s, i) => (
          <li
            className={s[1]}
            onClick={(e) => handleClick(e.target.classList, i)}
          >
            {s[0]}
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button onClick={newGame}>New Puzzle</button>
        <button onClick={startOver} disabled={currentStep === 1}>
          Start Over
        </button>
        <button onClick={undoMove} disabled={currentStep === 1}>
          Undo Move
        </button>
      </div>
    </div>
  );
}

export default App;
