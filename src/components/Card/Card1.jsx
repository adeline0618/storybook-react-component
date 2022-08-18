import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const StyledCard = styled.div`
  background-color: #ffffff;
  width: 19rem;
  height: 22rem;
  border-radius: 4rem 4rem 0 0;
  border-bottom: 5px solid #f0e2bd8b;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    line-height: 3rem;
    text-align: center;
    color: inherit;
    padding: 0 1rem;
  }
  a:link {
    text-decoration: none;
    color: inherit;
  }

  p {
    font-size: 1.1rem;
    white-space: nowrap;
  }
  .title {
    margin-top: 1rem;
  }
  .top {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
  }
  :hover {
    box-shadow: 0 0 25px ${props => props.color2 || " #ddf1f6"},
      0 0 25px ${props => props.color2 || " #dbeef2"},
      0 0 30px ${props => props.color2 || " #efe8d4"},
      0 0 30px ${props => props.color2 || " #cfecf4"};
  }
  .date {
    display: inline-block;
    width: 70%;
    height: 1.8rem;
    line-height: 1.8rem;
    border-bottom: 4px solid #dbeef2;
  }
  .category {
    display: inline-block;
    width: 20%;
    height: 1.8rem;
    line-height: 1.8rem;
    border-radius: 24px 0 0 0;
    border: 4px solid #c99f1374;
  }
  .imgContainer {
    display: inline-block;
    position: relative;
    padding-top: 80%;
    overflow: hidden;
    width: 100%;
    height: 100%;

    .centered {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-transform: translate(50%, 50%);
      -ms-transform: translate(50%, 50%);
      transform: translate(50%, 50%);
    }

    .centered img {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100%;
      height: 100%;
      height: auto;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
`;
const Card1 = ({ title, content, category, imgURL, link, color2, color1 }) => (
  <StyledCard color1={color1} color2={color2}>
    <div
    //  onClick={() => window.open({ link }, "_blank")}
    >
      <div className='imgContainer'>
        <div className='centered'>
          <img src={imgURL} alt='img'></img>
        </div>
      </div>
      <div className='top'>
        <span className='category'>{category}</span>
        <span className='title'>{title}</span>
        <span className='content'>{content}</span>
      </div>
    </div>
  </StyledCard>
);

export default Card1;
