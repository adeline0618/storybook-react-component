import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: ${props => props.color1 || "transparent"};
  position: relative;
  /* margin: 100px; */
  display: inline-block;
  padding: ${props => props.paddingHeigth || "12"}px
    ${props => props.paddingWidth || "18"}px;
  font-size: ${props => props.fontSize || "18"}px;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.5s;
  letter-spacing: 4px;
  color: ${props => props.textColor || " #ffffff"};
  span {
    position: absolute;
    display: block;
  }

  :hover {
    background-color: ${props => props.color2 || " #fcfa95"};
    color: ${props => props.textHoverColor || " #000000"};
    border-radius: 5px;
    box-shadow: 0 0 5px ${props => props.color2 || " #fcfa95"},
      0 0 25px ${props => props.color2 || " #fcfa95"},
      0 0 30px ${props => props.color2 || " #fcfa95"},
      0 0 30px ${props => props.color2 || " #fcfa95"};
  }
  @keyframes btnAnimA {
    0% {
      left: -100%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${props => props.color2 || " #fcfa95"}
    );
    animation: btnAnimA 1500ms linear infinite;
    animation-fill-mode: backwards;
    animation-play-state: running;
  }

  @keyframes btnAnimB {
    0% {
      top: -100%;
    }
    50% {
      top: 100%;
    }
    100% {
      top: 100%;
    }
  }
  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent,
      ${props => props.color2 || " #fcfa95"}
    );
    animation: btnAnimB 1500ms linear infinite;
    animation-delay: 300ms;
  }

  @keyframes btnAnimC {
    0% {
      right: -100%;
    }
    50% {
      right: 100%;
    }
    100% {
      right: 100%;
    }
  }
  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      270deg,
      transparent,
      ${props => props.color2 || " #fcfa95"}
    );
    animation: btnAnimC 1500ms linear infinite;
    animation-delay: 600ms;
  }

  @keyframes btnAnimD {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
  span:nth-child(4) {
    left: 0;
    bottom: -100%;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      360deg,
      transparent,
      ${props => props.color2 || " #fcfa95"}
    );
    animation: btnAnimD 1500ms linear infinite;
    animation-delay: 900ms;
  }
`;

const Button2 = ({
  color1,
  color2,
  text,
  textColor,
  textHoverColor,
  paddingWidth,
  paddingHeigth,
  fontSize,
}) => (
  <StyledButton
    paddingWidth={paddingWidth}
    paddingHeigth={paddingHeigth}
    textHoverColor={textHoverColor}
    color1={color1}
    color2={color2}
    textColor={textColor}
    fontSize={fontSize}
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {text ? text : "Button"}
  </StyledButton>
);
export default Button2;
