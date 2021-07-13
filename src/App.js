import React, { useEffect, useState } from 'react';
// import useSound from 'use-sound';
// // import boopSfx from "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1626204081/paxpana/click.wav";

import './App.css';


function App() {

  let img = [
    "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626123426/paxpana/coming_soon/room.jpg",
    "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626123422/paxpana/coming_soon/dog.jpg",
    "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626123418/paxpana/coming_soon/balcony.jpg",
    "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626123418/paxpana/coming_soon/bath.jpg",
  ];

  const [count, setCount] = useState(0);

  const [email, setEmail] = useState("");
  

  useEffect(() => {
      if(count === img.length){
        setCount(0);
      }else{
        return null;
      }
  }, [count, img.length]);


  return (
    <main onClick={() => setCount(count + 1)}>
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
            <div class="mailchimp_input">
              <label>
                <input 
                  type="text" 
                  name="FNAME"
                  placeholder="email address" 
                  id="MERGE1" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
            </div>
        </section>
        <section>
            <img 
              alt="img"
              src={img[count]}
            />
        </section>
        <img 
          className="refresh"
          alt="refresh"
          src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1626200996/paxpana/refresh_button_70_opacity.png" />
    </main>
  );
}

export default App;

