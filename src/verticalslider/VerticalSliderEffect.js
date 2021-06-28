import React, { useState } from 'react';
import useInterval from '@use-it/interval';

import VerticalSliderContent from "./VerticalSliderContent";
import '../App.css';

function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle];
}


function VerticalSliderEffect() {

  const [isOn, toggleIsOn] = useToggle();

  useInterval(() => {
    toggleIsOn((isOn) => !isOn);
  }, 1000);


  const verticalSlider = () => {

    const img = [
      {
        img: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1624302924/paxpana/inspirations/main/IMG_0478.jpg",
        height: "33.33vh"
      },
      {
        img: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1624302858/paxpana/inspirations/main/IMG_0408.jpg",
        height: "33.33vh"
      },
      {
        img: "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1624302923/paxpana/inspirations/main/IMG_0637.jpg",
        height: "33.33vh"
      }
    ];

    let stack = img
    .map((ele, index) => {
      return (
          <VerticalSliderContent 
            ele={ele.img}
            height={ele.height}
            index={index}
          />
      )
    });

    return (
      <div>
        {stack}
      </div>
    )
  }

  let renderVerticalSlider = () => {
    if(isOn){
      return verticalSlider();
    }
  }
  
  return (
    <div className="vertical_slider_container">
        {renderVerticalSlider()}
    </div>
  );
}

export default VerticalSliderEffect;