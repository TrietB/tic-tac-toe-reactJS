import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([])

  //Declaring a Winner
  useEffect(() => {
    setWinner(calculateWinner(squares)) 
  }, [squares]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    const cloneSquare = squares.slice()
    
    cloneSquare[i]= xIsNext ? 'X':'O'

    setSquares(cloneSquare)
    
    switch (xIsNext) {
      case true:
        setXIsNext(false)
        break;
      case false:
        setXIsNext(true)
        break;
      default:
    }
    
    
    setHistory([...history, cloneSquare])
    
    // console.log(squares)
    console.log(history)
    // console.log(cloneSquare)
  };
  
  
  //Restart game
  const handleRestart = () => {
   setSquares(Array(9).fill(null));
   setXIsNext(true)
   setHistory([])
  };

  const turnBack = (array, index) => {
    let newArr = [...array]
    const undo = newArr.at(index)

    let whichPlayer = index  +1
    if(index % 2 === 0 && xIsNext){
      setXIsNext(false)
      setHistory(newArr)
      console.log(index)
    } 
    console.log(undo)
    console.log(whichPlayer)
    console.log(index)
    setSquares(undo)
  }

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board squares={squares} handleClick={handleClick}  />

        <div className='history'>
        <h4>Player moves</h4>
        <ul>
          <li><button>Begin of game</button></li>
           
           {history.slice(1).map((move, i)=>{
            let str = `Player moves #${i+1}`
            return(<li key={i}><button onClick={()=>turnBack(history, i)}>{str}</button></li>)
           })}
        </ul> 
    </div>  
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
