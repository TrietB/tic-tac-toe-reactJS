import React from "react";

function Square({ x, handleClick}) {
  return (
    <button className={"square"} onClick={handleClick}>
      {x}
    </button>
  );
}

export default Square;
