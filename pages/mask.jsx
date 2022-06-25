import Image from 'next/image';
import React from 'react';
import maskImg from '../public/assets/projects/mask.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const mask = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={maskImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Masked-Face Recognition and Detection</h2>
          <h3>Python / TensorFlow / OpenCV</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Masked-Face Recognition and detection system that can achieve real-time face recognition while wearing a facial mask.
          FaceNet technology with Inception-ResNet V1 convolutional
 neural networks has been used train the deep learning model using TensorFlow platform on a Python environment.
 CASIA-Webface and LFW datasets have been used for train and evaluation of the model. This program successfully
  identify faces with or without masks using SSD (Single-shot MultiBox Detector) and then recognize the faces in 
  real-time by calculating the FaceNet embedding distance between anchor image and the images in the database.
          </p>
          <a
            href='https://github.com/k0litha/Masked-Face-Recognition-System#masked-face-recognition-system'
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
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TensorFlow
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenCV
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Numpy
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Nvidia CUDA
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> FaceNet
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

export default mask;
