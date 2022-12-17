import React from "react";
import "./Coin.css";

/**
 *
 * @param {boolean} side true - heads, false - tails
 */

function Coin({ side }) {
  return <div className="Coin" data-testid="coin" style={{ background: side ? "green" : "red" }}></div>;
}

export default Coin;
