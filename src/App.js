import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  let img = [
    "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1624302693/paxpana/inspirations/homepage/577204.jpg",
    "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1624303082/paxpana/inspirations/main/unnamed_5.jpg",
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
      if(count === img.length){
        setCount(0);
      }else{
        return null;
      }
  }, [count, img.length]);


  return (
    <main onClick={() => setCount(count + 1)}>
        <section className="coming_soon first">
            <h1>pax pana</h1>
            <h1>coming soon</h1>
        </section> 
        <section className="coming_soon second">
            <h1>thank you!</h1>
        </section>
        <section>
            <img 
              alt="img"
              src={img[count]}
            />
        </section>
    </main>
  );
}

export default App;

