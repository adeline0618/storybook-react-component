import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Star = ({ selected, onSelect = f => f }) => (
  <FaStar color={selected ? "yellow" : "grey"} onClick={onSelect} />
);

const Rating = ({ number = 5 }) => {
  const [selected, setSelected] = useState(-1);
  return (
    <>
      {[...Array(number)].map((num, idx) => (
        <Star
          key={idx}
          onSelect={() => setSelected(idx + 1)}
          selected={idx < selected}
        />
      ))}
    </>
  );
};
Rating.propTypes = {
  number: PropTypes.number,
};
export default Rating;
