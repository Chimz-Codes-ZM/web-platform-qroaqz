import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const content = [
  'Software Engineer',
  'Software Developer',
  'Frontend Engineer',
  'Frontend Developer',
];

export default function Main() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div>
      <section
        class="
          w-full
          h-screen
          bg-gray-300
          scroll-smooth
          bg-no-reapeat
          flex
          justify-center
          items-center
          space-x-1
          text-xl
          
          md:text-5xl
          text-gray-700
          font-medium
          
        "
        style={{
          background: `url("https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1243&q=80)"`,
          backgroundRepeat: 'no-reapeat',
          backgroundSize: 'cover',
        }}
      >
        <p className="pt-2 ">
          Chimweme {width < 576 ? <br /> : null} Masona
          <span className="w-2">
            
          </span>
        </p>
        <div id="container1" className="text-center">
          
          <div
            id="cursor"
            className=" w-1 sm:w-0 h-12 text-orange-300"
            style={{ animation: 'blink 0.75s step-end infinite' }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString('Software Engineer')

                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Software Developer')

                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Frontend Developer')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Frontend Engineer')
                  .start();
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
