import React from "react";
import { useState } from "react";
import About from "./about";
import { GrDislike } from "react-icons/gr";
const Lotus = () => {
  const [count, setcount] = useState(1);

  const multibuleandler = () => {
    setcount(count * 2);
  };

  const decrementHandler = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h2>hiiiiii</h2>
      {count >= 1 ? <h2>{count}</h2> : <h2>1</h2>}
      <About onDecrment={decrementHandler} />
      <GrDislike />
    </div>
  );
};
export default Lotus;
