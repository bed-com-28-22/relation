'use client'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="relative h-screen w-screen">
      <Head>
        <title>University of Malawi Online Lecturing</title>
      </Head>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl text-orange-500 md:text-6xl font-bold mb-4">
          University of Malawi online lecturing
        </h1>
        <p className="text-2xl md:text-4xl text-blue-700 mb-8">Learn, Know and Apply</p>
        <div className='justify-between content-center text-green-700 '>
          
        </div>
      </div>
      <Head>
        <title>File Upload</title>
      </Head>
      <Image
        src="/background.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      
      <div className="absolute top-4 left-4">
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <div className="flex flex-col items-center mb-8">
          <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10l5-5m0 0l5 5m-5-5v12"></path>
          </svg>
          <label
            onClick={handleUploadClick}
            className="text-2xl mb-4 text-blue-500 hover:underline cursor-pointer"
          >
        
          </label>
          <button
            onClick={handleUploadClick}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
          >
            Upload a file
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        <div className="mt-4 text-center">
           <a href="/UpDownload" className="text-indigo-600 hover:underline flex items-center justify-center">
             <span className="mr-2"></span> Back
           </a>
         </div>
      </div>
    </div>
  );
}
