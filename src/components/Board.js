import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square x={squares[0]} handleClick={()=>handleClick(0)} />
          <Square x={squares[1]} handleClick={()=>handleClick(1)} />
          <Square x={squares[2]} handleClick={()=>handleClick(2)} />
        </div>
        <div className="board-row">
          <Square x={squares[3]} handleClick={()=>handleClick(3)} />
          <Square x={squares[4]} handleClick={()=>handleClick(4)} />
          <Square x={squares[5]} handleClick={()=>handleClick(5)} />
        </div>
        <div className="board-row">
          <Square x={squares[6]} handleClick={()=>handleClick(6)} />
          <Square x={squares[7]} handleClick={()=>handleClick(7)} />
          <Square x={squares[8]} handleClick={()=>handleClick(8)} />
        </div>
      </div>
    </div>
  );
}
