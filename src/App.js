import React, { useEffect, useState } from 'react';
import { useMailChimp } from 'react-use-mailchimp-signup';
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query'
import useSound from 'use-sound';
import submission from './assets/submission.mp3';
import click from './assets/click.mp3';

import './App.css';


let img = [
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626123426/paxpana/coming_soon/room.jpg",
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626123422/paxpana/coming_soon/dog.jpg",
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626123418/paxpana/coming_soon/balcony.jpg",
  "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626123418/paxpana/coming_soon/bath.jpg",
];

const url = "https://gmail.us6.list-manage.com/subscribe/post?u=529cf141a9d5c3aec045e67da&amp;id=c2ad5d33b2";

let randomImg = [...img].sort(() => Math.random() - 0.5);

function App() {

  const { error, loading, status, subscribe, message } = useMailChimp({
    action: url,
  });


  const [imgArray, setImgArray] = useState([]);   
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState({});

  const [playSubmission] = useSound(submission);
  const [playClick] = useSound(click);

  useEffect(() => {
    setImgArray(randomImg);
  }, []);


  useEffect(() => {
   if(count === img.length){
      setCount(0);
    }else{
      return null;
    }
  }, [count, img.length]);


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
    }
  };
 
  const handleResetImages = () => {
    setImgArray(img);
    setCount(0);
  }

  let style = {
    backgroundImage: `url(${imgArray[count]})`
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
            <h3>thank you!</h3>
            <div className="mailchimp_input">

             <section>

              <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="mchimpEmail" onChange={handleInputChange} />
              </form>

              {error && <p>ERROR</p>}
              {loading && <p>...Loading</p>}
              {status && <p>{status}</p>}

            </section>

            </div>
        </section>

        <section 
          style={style}
          className="img_section"
          onClick={() => setCount(count + 1)}
        />

        <img 
          onClick={handleResetImages}
          className="refresh"
          alt="refresh"
          src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626200996/paxpana/refresh_button_70_opacity.png" 
        />

    </main>
  );
}

export default App;

