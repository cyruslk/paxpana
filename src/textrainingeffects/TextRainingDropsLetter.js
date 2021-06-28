import '../App.css';

function ImgDropsTextLetter(props) {

  const returnRandomValue = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  let {
    i,
    letter
  } = props;

  const fonts = [
    'ps',
  ];

  const colors = [
    "red",
    "black",
  ]

  let style = {
    fontFamily: returnRandomValue(fonts),
    color: returnRandomValue(colors),
    fontSize: "1vw"
  }

  return (
    <span 
      style={style}
      key={i}>
       {letter}
    </span>
  );
}

export default ImgDropsTextLetter;
