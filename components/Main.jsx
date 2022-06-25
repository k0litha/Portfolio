import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import NavLogo from '../public/assets/navLogo.png'


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
        
          <h1 className='py-4 text-gray-700 ' >
            Hi, I&#39;m <span className='text-[#456676]'> Kolitha</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Software Developer.</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto '>
            I’m a self-motivated, young and enthusiastic undergraduate who is building the path to become a full stack Developer.
          </p> 
          <Image
              src={NavLogo}
              alt='/'
              width='240'
              height='110'
              className='cursor-pointer'
            />
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/kolitha-senevirathne/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={25}/>
              </div>
            </a>
            <a
              href='https://github.com/k0litha'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={25}/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={25}/>
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill size={25}/>
              </div>
            </Link>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Main;
