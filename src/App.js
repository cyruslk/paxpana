import React, { useEffect, useState } from 'react';
import { useMailChimp } from 'react-use-mailchimp-signup';
import useSound from 'use-sound';
import submission from './assets/submission.mp3';
import click from './assets/click.mp3';
import './App.css';

const mailchimpURL = "https://gmail.us6.list-manage.com/subscribe/post?u=529cf141a9d5c3aec045e67da&amp;id=c2ad5d33b2";


function App() {

  useFavicon("https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1627910449/paxpana/coming_soon/Favicon.ico");

  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const [inputs, setInputs] = useState({});
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isShowSubscription, setIsShowSubscription] = useState(false);
  
  const [playClick] = useSound(click);

  const { error, loading, status, subscribe, message } = useMailChimp(
    {action: mailchimpURL}
  );

  useEffect(() => {

    document.querySelector('video').defaultPlaybackRate = 0.6;
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
      // setVideo mobile;
    }else{
      // setVideo desktop;
    }
  }, [windowSize]);

 
  useEffect(() => {
    if(isShowSubscription){      
        setTimeout(() => {
          setIsShowSubscription(false);
        }, 2000);
    }
  }, [isShowSubscription])

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

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const handleSubmit = (event) => {
    
    let mailChimpInput = document.getElementById("mchimpEmail").value;
    let isEmail = validateEmail(mailChimpInput);
    if(!isEmail){
      return;
    }

    setTimeout(() => {
      setIsShowSubscription(true)
    }, 2000);

    if (event) {
      event.preventDefault();
    }
    if (inputs) {
      subscribe(inputs);
      if(!error){
        setIsSubscribed("thank you")
      }
      document.getElementById("emailSubscribeForm").reset();
    }
  };
 
  const handlePlayClick = () => {
    playClick();
  };

  const returnSubscriptionMessageStyle = () => {
    if(isShowSubscription){
      return "visible"
    }else {
      return "hidden"
    };

  };


  return (
    <main>
        <img 
          src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1628022774/ComingSoon.Desktop.Updated_sn1kwt.jpg" />
        <div 
          onClick={handlePlayClick}
          className="video-container">
            <video 
              autoPlay 
              playsInline
              muted 
              loop>
                <source 
                  src="https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1628772026/paxpana/background-video.mp4" 
                  type="video/mp4"/>
            </video>
        </div>
        <section 
        onClick={handlePlayClick}
        className="outer_container">
          <section className="coming_soon inner_container">
              <h1>pax pana</h1>
              <h2>coming soon</h2>

              <section className="mailchimp_section">

              <h3 
                style={{
                  visibility: returnSubscriptionMessageStyle()
                }}
                id="subscription_message">
                thank you!
              </h3>

              <div className="mailchimp_input">
                <section>
                  <form 
                    className="form_to_submit"
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
                      <div>
                      <span
                        className="load-more"
                        onClick={handleSubmit}>
                        </span>
                      </div>
                  </form>
                </section>
              </div>
              </section>
          </section> 
        </section>
    </main>
  );
}


const useFavicon = href => {
  useEffect(() => {
    const link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = href;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, [href]);
};


export default App;

