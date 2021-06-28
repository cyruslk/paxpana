import TextRainingDrops from "./TextRainingDrops";
import '../App.css';

function TextRainingEffect() {


  const returnRandomValue = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  const rainingEffect = () => {

    const rainingParticles = 20;
    const maxWidthImages = 10;

    // Remove this and images in the children components if we don't add images;
    const imgTest = "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/c_fill,w_500/v1491682444/Alicia_Mersy/tumblr_inline_nvi8vp8T2O1rnaui6_500.jpg"
    const emptyArray = [];

    let minTextDropPosition = 0;
    let maxImagePosition = document.documentElement.clientWidth - maxWidthImages;

    for(let i = 0; i < rainingParticles; i++){

      let baseStyle = {
        position: "absolute",
        top: 0,
        left: returnRandomValue(minTextDropPosition, maxImagePosition)
      };

      let animationStyle = {
        animationDelay: returnRandomValue(0, 4),
        animationSpeed: returnRandomValue(2, 4)
      }


      let imgStyle = {
        width: maxWidthImages
      }

       emptyArray
      .push(
        <TextRainingDrops
          i={i}
          imgStyle={imgStyle}
          baseStyle={baseStyle}
          animationStyle={animationStyle}
          imgTest={imgTest}
         /> 
      )
    }
    return emptyArray;
  };

  return (
    <div>
       {rainingEffect()}
    </div>
  );
}

export default TextRainingEffect;
