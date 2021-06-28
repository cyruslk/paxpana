import WatermarksItem from "./WatermarksItem";
import '../App.css';

function WaterMarksEffects() {


  const returnRandomValue = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  const waterMarksEffect = () => {

    const waterMarksParticles = 2;
    const emptyArray = [];

    for(let i = 0; i < waterMarksParticles; i++){

      emptyArray
      .push(
        <WatermarksItem 
        />
      )
    }
    return emptyArray;
  };

  return (
    <div>
       {waterMarksEffect()}
    </div>
  );
}

export default WaterMarksEffects;
