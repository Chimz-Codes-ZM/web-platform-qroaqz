import React from 'react'

export default function Projects() {
  return (
    <>
      <section id="projects" class="scroll-smooth">
        <div class="wrapper">
          <div class="container scrollx flex flex-col    ">
          
            <section class="sec1 pin">
              <h3 class="text-xl">Random User Project</h3>

              <div class="col flex flex-col sm:flex-row">
                <a
                  href="https://react-router-auth-15c38.web.app/"
                  target="_blank"
                  ><img
                    src="https://stackblitz.com/files/tailwindcss-y9boc3/github/Chimz-Codes-ZM/portfolio022023/gsap_scrolling/Components/undraw_Team_up_re_84ok.png"
                    alt="calculator"
                    class=""
                    
                /></a>
                <p class="w-full sm:w-1/2 sm:text-3xl" id="project-text">
                  A project that made use of various methods & techniques
                  including error boundaries, Firebase hosting, authentication,
                  and backend pagination utilizing Google authentication and the
                  randomuser.me API.
                </p>
              </div>
            </section>
            <section class="sec2 pin">
              <h3 class="text-xl anim">React Calculator</h3>

              <div class="col anim flex flex-col sm:flex-row">
                <a href="https://react-calc-blond.vercel.app/" target="_blank"
                  ><img
                    src="https://plus.unsplash.com/premium_photo-1669658981244-afe0e3e371bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80"
                    alt="calculator"
                    class=""
                    
                /></a>
                <p class="w-full sm:w-1/2 sm:text-3xl" id="project-text">
                  A React-based calculator that allows users to perform basic
                  mathematical operations such as addition, subtraction,
                  multiplication and division, with a clean and intuitive user
                  interface. It uses state management to dynamically update the
                  display and ensure accurate calculation results.
                </p>
              </div>
            </section>
            <section class="sec3 pin w-full">
              <h3 class="text-xl anim">Metabnb Marketplace</h3>

              <div class="col anim flex flex-col sm:flex-row">
                <a href="https://meta-bnb-sepia.vercel.app/" target="_blank"
                  ><img
                    src="https://meta-bnb-sepia.vercel.app/static/media/secondHero.a8af7e0fa95161e46002.png"
                    alt="calculator"
                    class=""
                /></a>
                <p class="w-full sm:w-1/2 sm:text-3xl" id="project-text">
                  "Metabnb", a landing page built in React, provides luxury and
                  affordable virtual houses for rent in the metaverse.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>


    </>
  )
}