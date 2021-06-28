import React, { useState } from 'react';
import useInterval from '@use-it/interval';
import styled, { keyframes } from 'styled-components'
import TextRainingDropsLetter from "./TextRainingDropsLetter";
import '../App.css';


function TextRainingDrops(props) {
  
  let {
    i, 
    baseStyle,
    text,
    animationStyle,
    imgStyle,
    imgTest
  } = props;

  let  {
    animationDelay,
    animationSpeed
  } = animationStyle;

  const renderDisplayedText = () => {
    return "paxpana";
  }

  const splitText = (text) => {
    return text
    .split("")
    .map((ele, i) => {
      return (
        <TextRainingDropsLetter 
          letter={ele}
          i={i}
        /> 
      )
    })
  }

  const breatheAnimation = keyframes`
	  to {
      transform: translateY(100vh)
    }
  `
  const StyledWrapper = styled.div`
    animation: ${breatheAnimation} ${animationSpeed}s linear infinite;
    animation-delay: ${animationDelay}s;
  `

  return (
    <StyledWrapper 
      className="img_drops"
      style={baseStyle}
      key={i}
    >
      {splitText(renderDisplayedText())}
    </StyledWrapper>
  );
}

export default TextRainingDrops;

