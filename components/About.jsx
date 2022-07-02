import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/me.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-2xl tracking-widest text-[#456676]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
         
          <p className='py-2 text-gray-600'>
          Enthusiastic, and motivated software engineering undergraduate with diverse analytical skills, team 
          collaboration, and relationship building. Currently familiar
           with a variety of programming languages and frameworks including 
           C#, C, Python, JavaScript, ReactJS, NodeJS, PHP, HTML, CSS,
            .Net, SQL. but I’m always adding new skills to my repertoire daily.
          </p>
   
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
