import React, { useState } from 'react';
import useInterval from '@use-it/interval';
import TextRainingEffect from "./textrainingeffects/TextRainingEffect";
import WatermarksEffect from "./watermarks/WatermarksEffect";
import VerticalSlider from "./verticalslider/VerticalSliderEffect";
import './App.css';


function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle];
}

function Transition() {

  return (
    <div>
        <TextRainingEffect />
        <VerticalSlider />
    </div>
  );
}

export default Transition;
