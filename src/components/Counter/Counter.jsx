import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

const Counter = ({ color }) => {
  let [num, setCount] = useState(0);

  const handleOnClick = evtType => {
    if (evtType === "ADD") {
      setCount(num + 1);
      return;
    }
    setCount(num - 1);
  };

  return (
    <>
      <span style={{ color }}>Counter:{num}</span>
      <br />
      <Button
        label='+'
        onClick={() => handleOnClick("ADD")}
        backgroundColor='#2b860b'
      />
      <Button
        label='-'
        onClick={() => {
          handleOnClick();
        }}
        backgroundColor='#2b860b'
      />
    </>
  );
};

export default Counter;

Counter.propTypes = {
  color: PropTypes.string,
};
