import React, { useEffect, useState } from 'react';
import { useMailChimp } from 'react-use-mailchimp-signup';
import useSound from 'use-sound';
import submission from './assets/submission.mp3';
import click from './assets/click.mp3';
import './App.css';


const mailchimpURL = "https://gmail.us6.list-manage.com/subscribe/post?u=529cf141a9d5c3aec045e67da&amp;id=c2ad5d33b2";

let imgDesktop = [
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1627128951/paxpana/coming_soon/desktop_img_1.jpg",
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1627128947/paxpana/coming_soon/desktop_img_2.jpg",
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1627128951/paxpana/coming_soon/desktop_img_3.jpg",
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1627128951/paxpana/coming_soon/desktop_img_4.jpg"
];

let imgMobile = [
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1627137179/paxpana/coming_soon/mobile_img_1.jpg",
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1627137180/paxpana/coming_soon/mobile_img_2.jpg",
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1627137179/paxpana/coming_soon/mobile_img_3.jpg",
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1627164713/paxpana/coming_soon/mobile_img_4.jpg"
]

function App() {



  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [imgArray, setImgArray] = useState([]);   
  const [countImg, setCountImg] = useState(0);
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const [inputs, setInputs] = useState({});
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const [playSubmission] = useSound(submission);
  const [playClick] = useSound(click);


  const { error, loading, status, subscribe, message } = useMailChimp(
    {action: mailchimpURL}
  );


  useEffect(() => {

    // let lockOrientation = window.screen.lockOrientation || window.screen.mozLockOrientation || window.screen.msLockOrientation || window.screen.orientation.lock;

    // lockOrientation('portrait');

    setImgArray(imgDesktop);
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  useEffect(() => {

    if(windowSize.width < 600) {
      setImgArray(imgMobile);
    }else{
      setImgArray(imgDesktop);
    }

    if(countImg === imgArray.length){
        setCountImg(0);
      }else{
        return null;
      }
  }, [countImg, imgArray.length, windowSize]);

  

  const returnPlaceholderName = () => {
    if(isPlaceholder){
      return "email address";
    }else{
      return "";
    }
  };

const handlePlaceholderNameChange = () => {
  setIsPlaceholder(!isPlaceholder);
};

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (inputs) {
      playSubmission();
      subscribe(inputs);
      if(error){
        setIsSubscribed("Oops, something went wrong")
      }
      if(loading){
        setIsSubscribed("Loading")
      }
      if(!error){
        setIsSubscribed("thank you")
      }
      document.getElementById("emailSubscribeForm").reset();
    }
  };
 
  const handlePlayClick = () => {
    playClick();
    setCountImg(countImg + 1);
  };

  const returnSubscriptionMessage = () => {
    if(isSubscribed){
      return "thank you!"
    }else{
      return null;
    }
  };

  const renderButtonMobile = () => {
    return (
      <button onClick={handleSubmit}>
        SUBMIT
      </button>
    )
  }

  let style = {
    backgroundImage: `url(${imgArray[countImg]})`
  };

  return (
    <main>
        <img 
            id="layer"
            alt="refresh"
            src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626190843/paxpana/coming_soon/ComingSoon.Desktop.jpg" 
        />
        <section className="coming_soon first">
            <h1>pax pana</h1>
            <h2>coming soon</h2>
        </section> 
        
        <section className="coming_soon second">
            <h3>{returnSubscriptionMessage()}</h3>
            <div className="mailchimp_input">
             <section>
              <form 
                id="emailSubscribeForm"
                onSubmit={handleSubmit}>

                <input
                  onClick={handlePlaceholderNameChange}
                  onBlur={handlePlaceholderNameChange}
                  placeholder={returnPlaceholderName()}
                  type="email" 
                  name="email" 
                  id="mchimpEmail" 
                  onChange={handleInputChange} 
                />
              </form>

              {renderButtonMobile()}

            </section>
            </div>

        </section>

        <section 
          style={style}
          className="img_section"
        />

        <img 
          onClick={handlePlayClick}
          className="refresh"
          alt="refresh"
          src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626200996/paxpana/refresh_button_70_opacity.png" 
        />

    </main>
  );
}


export default App;

