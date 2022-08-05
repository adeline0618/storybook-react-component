import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 130px;
  height: 40px;
  color:${props => props.textColor || "#0000008d"};
  border-radius: 0.2rem;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: ${props => props.fontSize || "18px"};
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:inset 1px 1px 1px 0px rgba(255,255,255,.5),
  3px 3px 8px 0px rgba(0,0,0,.1),
  1px 1px 2px 0px rgba(0,0,0,.1);
  outline: none;

  background:linear-gradient(0deg, ${props =>
    props.color2 || "#e7e6b89d"} 0%, ${props =>
  props.color1 || " #bb95fc9d"} 100%);
    line-height:42px;
    padding: 0;
    border: none;
  
  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  ::before,
  ::after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;

    background:${props => props.color1 || " #bb95fc9d"};
    box-shadow:
     -7px -7px 20px 0px rgba(255,255,255,.9),
     -4px -4px 5px 0px rgba(255,255,255,.9),
     7px 7px 20px 0px rgba(0,0,0,.2),
     4px 4px 5px 0px rgba(0,0,0,.3);
    transition: all 0.3s ease;
  }
  ::before{
     height: 0%;
     width: 2px;
  }
  ::after {
    width: 0%;
    height: 2px;
  }
  :hover{
    color:${props => props.color1 || " #bb95fc9d"};
    background: transparent;
  }
  :hover:before {
    height: 100%;
  }
  :hover:after {
    width: 100%;
  }
  span:before,
  span:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background:${props => props.color1 || " #bb95fc9d"};
    box-shadow:
     -7px -7px 20px 0px rgba(255,255,255,.9),
     -4px -4px 5px 0px rgba(255,255,255,.9),
     7px 7px 20px 0px rgba(0,0,0,.2),
     4px 4px 5px 0px rgba(0,0,0,.3);
    transition: all 0.3s ease;
  }
  span:before {
    width: 2px;
    height: 0%;
  }
  span:after {
    height: 2px;
    width: 0%;
  }
 span:hover:before {
    height: 100%;
  }
  span:hover:after {
    width: 100%;
`;

const Button = ({ color1, color2, text, textColor, fontSize }) => (
  <StyledButton
    color1={color1}
    color2={color2}
    fontSize={fontSize}
    textColor={textColor}
  >
    <span>{text ? text : "Click"}</span>
  </StyledButton>
);
export default Button;
