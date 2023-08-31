import React from "react";
import { animated, useTrail } from "react-spring";

function TitleAnim() {
  const text = ["E", "l", "e", "c", "t", "r", "a"];

  // Create an array of animations for each letter
  const trail = useTrail(text.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 200, friction: 10 }, // Adjust the tension and friction as needed
  });

  return (
    <h2 id="h2_nameShop">
      {trail.map((style, index) => (
        <animated.span key={index} style={style}>
          {text[index]}
        </animated.span>
      ))}
      <span style={{ color: "#FED813" }} className="fs-1">
        Hub
      </span>
    </h2>
  );
}

export default TitleAnim;
