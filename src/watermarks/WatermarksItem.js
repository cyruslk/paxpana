import '../App.css';

function WaterMarksItem() {

  const text = "paxpana";

  let style = {
    fontFamily: 'rock-salt',
    fontSize: "10vw"
  }

  const waterMark = () => {

    return (
      <span
        style={style}>
          {text}
      </span>
    )
  };
  
  return (
    <div className="watermaks">
        {waterMark()}
    </div>
  );
}

export default WaterMarksItem;
