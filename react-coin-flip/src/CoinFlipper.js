import React, { useState } from "react";
import Coin from "./Coin";

function CoinFlipper() {
  const [side, setSide] = useState();
  const [flips, setFlips] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);

  function flip() {
    const randBool = Math.random() > 0.5 ? true : false;

    setSide(randBool);
    setFlips(flips + 1);

    if (randBool) {
      setHeads(heads + 1);
    } else {
      setTails(tails + 1);
    }
  }

  return (
    <div className="CoinFlipper">
      <Coin side={side} />
      <button onClick={flip} data-testid="flip-button">
        FLIP MEEEE
      </button>
      <p>
        Out of {flips} flips, there have been {heads} heads(green) and {tails} tails(red).
      </p>
    </div>
  );
}

export default CoinFlipper;
