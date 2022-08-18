import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  @font-face {
    font-family: "KCC-eunyoung";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KCC-eunyoung-Regular.woff")
      format("woff");
  }
  p {
    margin: 0;
    font-family: "KCC-eunyoung";
    white-space: nowrap;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${props => props.textColor || " #ffffff"};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    :hover {
      color: ${props => props.textHoverColor || "#ffffff"};
      font-size: 1.8rem;
      font-weight: 600;
    }
  }
  width: ${props => props.width || "7"}rem;
  height: ${props => props.height || "4"}rem;
  .shape {
    position: relative;
    background: linear-gradient(45deg, #67d39b 0%, #71c9e0 100%);
    animation: morph 12s ease infinite;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    height: ${props => props.heigth || "4"}rem;
    transition: all 0.5s ease;
    width: ${props => props.width || "7"}rem;
    z-index: 5;
    :hover {
      box-shadow: 0 0 25px ${props => props.color2 || " #ddf1f6"},
        0 0 25px ${props => props.color2 || " #dbeef2"},
        0 0 30px ${props => props.color2 || " #ffd343"},
        0 0 30px ${props => props.color2 || " #25535f"};
    }
  }
  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 40% 70% 40%;
      background: linear-gradient(
        45deg,
        ${props => props.color1 || "#ed8700"} 0%,
        {props => props.color2 || " #93b4bc"} 100%
      );
    }

    33% {
      border-radius: 20% 60% 70% 40% / 50% 70% 30% 60%;
      background: linear-gradient(
        135deg,
        ${props => props.color2 || "#93b4bc"} 0%,
        ${props => props.color1 || "#ed8700"} 100%
      );
    }

    66% {
      border-radius: 50% 40% 20% 60% / 60% 30% 70% 40%;
      background: linear-gradient(
        225deg,
        ${props => props.color1 || "#ed8700"} 0%,
        ${props => props.color2 || "#93b4bc"} 100%
      );
    }
    100% {
      border-radius: 20% 60% 70% 40% / 50% 60% 50% 60%;
      background: linear-gradient(
        15deg,
        ${props => props.color2 || "#93b4bc"} 0%,
        ${props => props.color1 || "#ed8700"} 100%
      );
    }
  } ;
`;

const Button3 = ({
  color1,
  color2,
  text,
  textColor,
  textHoverColor,
  width,
  heigth,
  fontSize,
}) => (
  <StyledButton
    width={width}
    heigth={heigth}
    textHoverColor={textHoverColor}
    color1={color1}
    color2={color2}
    textColor={textColor}
    fontSize={fontSize}
    text={text}
  >
    <div class='shape'>
      <p>{text ? text : "Button"}</p>
    </div>
  </StyledButton>
);
export default Button3;
