import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const StyledPagination = styled.nav`
  @font-face {
    font-family: "KCC-eunyoung";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KCC-eunyoung-Regular.woff")
      format("woff");
  }
  font-family: "KCC-eunyoung";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.curFontSize || "1.5"}rem;
  color: ${props => props.textColor || " #0000007d"};
  button {
    border: none;
    margin: 0 0.2rem;
    background-color: ${props => props.btnColor || " #ed86007e"};
    width: 2rem;
    height: 2rem;
    border-radius: 64% 36% 58% 42% / 30% 46% 54% 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.btnTextColor || "black"};
    &:hover {
      background: ${props => props.btnHoverColor || "#93b4bc"};
      cursor: pointer;
      transform: scale(1.1);
    }

    &[disabled] {
      background: #c4c4c4ad;
      cursor: revert;
      transform: revert;
    }
  }
  .icon {
    width: 2rem;
    height: 2rem;
  }
  .current {
    font-size: ${props => props.curFontSize || "2"}rem;
    color: black;
  }
`;

const Pagination = ({
  total,
  perPage,
  btnColor,
  color2,
  textColor,
  btnHoverColor,
  width,
  heigth,
  fontSize,
  curFontSize,
  btnTextColor,
}) => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);

  useEffect(() => {
    setTotalPage(Math.ceil(total / perPage));
  }, [total, perPage]);
  return (
    <StyledPagination
      width={width}
      heigth={heigth}
      btnHoverColor={btnHoverColor}
      btnColor={btnColor}
      color2={color2}
      textColor={textColor}
      fontSize={fontSize}
      curFontSize={curFontSize}
      btnTextColor={btnTextColor}
    >
      <button onClick={() => setPage(prev => prev - 1)} disabled={page === 1}>
        <MdOutlineArrowBackIosNew className='icon' />
      </button>
      <span>
        Page <span className='current'>{page}</span> of {totalPage}
      </span>
      <button
        onClick={() => setPage(prev => prev + 1)}
        disabled={page === totalPage}
      >
        <MdOutlineArrowForwardIos className='icon' />
      </button>
    </StyledPagination>
  );
};
export default Pagination;
