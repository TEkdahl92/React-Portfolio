import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Troy, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Full Stack web developer using my background in customer service to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the
University of Texas at Austin, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as a fun and innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I applied my knowledge of 
the MERN stack development in a recent project. I worked on a team of five to develop a multi-page MERN app that provides users with a more fun and enjoyable experience while searching for their favorite books or if they want to join a book club. I’m excited to
leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the
web.  </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;