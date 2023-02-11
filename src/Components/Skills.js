import React from 'react'

export default function Skills() {
  return (
    <>
       <section
        id="skill-section"
        className="flex flex-col justify-center items-center border p-10"
      >

      <h1 className="pb border-b-4 border-black text-2xl">Skills</h1>
        <div
          className="
            grid
            lg:grid-cols-4
            md:grid-cols-3
            grid-cols-2
            gap-x-6 gap-y-5
            mt-5
          "
        >
          <div
            className="
              flex
              items-center
              justify-start
              gap-2
              grayscale
              hover:grayscale-0
              cursor-pointer
              px-1
              py-2
            "
          >
          <box-icon name='react' type='logo' ></box-icon>
            <p className="text-sm font-medium">React</p>
          </div>
          
          <div
            className="
              flex
              items-center
              justify-start
              gap-2
              grayscale
              hover:grayscale-0
              cursor-pointer
              px-1
              py-2
            "
          >
          <box-icon name='tailwind-css' type='logo' ></box-icon>
            <p className="text-sm font-medium">TailwindCSS</p>
          </div>
          <div
            className="
              flex
              items-center
              justify-start
              gap-2
              grayscale
              hover:grayscale-0
              cursor-pointer
              px-1
              py-2
            "
          >
          <box-icon name='javascript' type='logo' animation='tada-hover'></box-icon>
            <p className="text-sm font-medium">Javascript</p>
          </div>
         
          <div
            className="
              flex
              items-center
              justify-start
              gap-2
              grayscale
              hover:grayscale-0
              cursor-pointer
              px-1
              py-2
            "
          >
          <box-icon name='git' type='logo' ></box-icon>            <p className="text-sm font-medium">Git</p>
          </div>
          <div
            className="
              flex
              items-center
              justify-start
              gap-2
              grayscale
              hover:grayscale-0
              cursor-pointer
              px-1
              py-2
            "
          >
          <box-icon name='visual-studio' type='logo' ></box-icon>
            <p className="text-sm font-medium">Visual Studio Code</p>
          </div>
          <div
            className="
              flex
              items-center
              justify-start
              gap-2
              grayscale
              hover:grayscale-0
              cursor-pointer
              px-1
              py-2
            "
          >
          <box-icon name='sass' type='logo' ></box-icon>
            <p className="text-sm font-medium">Sass</p>
          </div>
          <div
            className="
              flex
              items-center
              justify-start
              gap-2
              grayscale
              hover:grayscale-0
              cursor-pointer
              px-1
              py-2
            "
          >
          <box-icon name='css3' type='logo' ></box-icon>
            <p className="text-sm font-medium">CSS3</p>
          </div>
          <div
            class="
              flex
              items-center
              justify-start
              gap-2
              grayscale
              hover:grayscale-0
              cursor-pointer
              px-1
              py-2
            "
          >
          <box-icon name='html5' type='logo' ></box-icon>
            <p className="text-sm font-medium">HTML5</p>
          </div>

          <div
            className="
              flex
              items-center
              justify-start
              gap-2
              grayscale
              hover:grayscale-0
              cursor-pointer
              px-1
              py-2
            "
          >
          <box-icon type='logo' name='vuejs'></box-icon>
            <p className="text-sm font-medium">VueJS</p>
          </div>
        </div>
        <div></div>
      </section>
    </>
  )
}