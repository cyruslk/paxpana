import Transition from "./Transition";
import ComingSoon from "./ComingSoon";
import TextRainingEffect from "./textrainingeffects/TextRainingEffect";
import WatermarksEffect from "./watermarks/WatermarksEffect";
import VerticalSlider from "./verticalslider/VerticalSliderEffect";
import './App.css';


function App() {

  const renderVideo = () => {
    return (
      <video
      loop={true} 
      muted={true}
      autoPlay={true}>
      <source 
        src="https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1623450039/paxpana/Cloud_-_48503_1.mp4" 
        type="video/mp4"
      />
    </video>
    )
  }

  const renderTransition = () => {
    return (
      <Transition />
    )
  };

  const comingSoon = () => {
    return (
      <ComingSoon />
    )
  }

  return (
    <div>
      {renderTransition()}
      {comingSoon()}
      {renderVideo()}
    </div>
  );
}

export default App;

