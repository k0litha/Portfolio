import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Kolitha Senevirathne | Software Developer</title>
        
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Kolitha Senevirathne</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/kolitha-senevirathne/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/k0litha'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Software Engineering Undergraduate
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        Enthusiastic, and motivated software engineering
         undergraduate with diverse analytical skills, team 
         collaboration, and relationship building. Currently
          familiar with a variety of programming languages and 
          frameworks including C#, C, Python, JavaScript, 
          ReactJS, NodeJS, PHP, HTML, CSS, .Net, SQL. but 
        I’m always adding new skills to my repertoire daily.
        I am currently seeking a company that will help me contribute to its development while concurrently aiding my personal growth.

        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>C# <span className='px-2'>|</span>
           Java <span className='px-2'>|</span>React
            <span className='px-2'>|</span>JavaScript
            <span className='px-2'>|</span> PHP
          </p>
          <p className='py-2'>
            <span className='font-bold'>Certifications</span>
            <span className='px-2'>|</span><a
              href='https://www.credly.com/badges/9510f524-9e70-43c2-ac4b-7dc5856f97b2/linked_in?t=rebrqh'
              target='_blank'
              rel='noreferrer'
            >AZ-900: Microsoft Azure Fundamentals</a> <span className='px-2'>|</span>
            <a
              href='https://www.credly.com/badges/4e30cacf-a952-43e2-9a68-fc6bcbce912a/linked_in?t=rdnu7o'
              target='_blank'
              rel='noreferrer'
            >AI-900: Microsoft Azure AI Fundamentals</a>
          </p>
        </div>
         
      </div>
    </>
  );
};

export default resume;
