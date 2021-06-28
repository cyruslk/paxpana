import '../App.css';
import styled, { keyframes } from 'styled-components'

function VerticalSliderContent(props) {

  let {
    index,
    ele,
    height
  } = props;

  const returnAnimation = () => {
    switch(index) {
      case 0:
        return (
          keyframes`
          0% { height: ${height}}
          50% { height: 50vh}
          100% { height: ${height}}
        `
        )
        break;
      case 1:
        return (
          keyframes`
          0% { height: ${height}}
          50% { height: 25vh}
          100% { height: ${height}}
        `
        )
        break;
      case 2:
        return (
          keyframes`
          0% { height: ${height}}
          50% { height: 25vh}
          100% { height: ${height}}
        `
        )
        break;
      default:  
        return null;
    }
  };

  const StyledWrapper = styled.img`
    height: ${height};
    animation:  0.3s ${returnAnimation()} linear infinite;
  `
  return (
    <div 
      className="vertical_slider_img_container"
      key={index}>
        <StyledWrapper
          src={ele}
        />  
    </div>  
  );
}

export default VerticalSliderContent;