import Image from 'next/image';
import React from 'react';
import noteImg from '../public/assets/projects/note.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const note = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={noteImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>To-Note Note Taking Mobile App</h2>
          <h3>Kotlin / Room / MVVM Architecture / OCR</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          To-Note has  solved the issue of simplification of note taking by integrating the OCR (Optical Character Recognition). 
          There for it will be very helpful in their academic life. UI design of To-Note is built to be simplistic as possible.
           User can choose different colors for their notes to differentiate them as their choice. It has also made use of the 
           gesture controls to save, 6 delete and other functionalities. Text to speech integration help the user to multitask
            while listening to a particular note. Markdown text integration makes it easier to add lists any different
             text styles to the notes. Home screen widget can be added to the phone for easier access to the notes
              without having to open the app every time. Overall, this app is a must have in anyone’s
               app drawer, as it simplifies your
           busy life schedule and distresses you from your future plans and to-do activities</p>
          <a
            href='https://github.com/k0litha/ToNote-app#tonote-app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code & Demo</button>
          </a>
    
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Kotlin
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MVVM Architecture
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OCR
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Text-to-Speech
              </p>
              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default note;
