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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`File ${file.name} is selected for upload!`);
      // You can add your file upload logic here
    }
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
        <title>File Management</title>
      </Head>
      <Image
        src="/background.jpg"
        alt="University of Malawi"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
       <div className="top-4 left-4"> 
         <Link href="/login" className="text-indigo-600 hover:underline flex items-center"> 
           <span className="mr-2">←</span> 
         </Link> 
       </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        
        <button
          onClick={handleUploadClick}
          className="mb-4 px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-300"
        >
          <b>Download</b>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="mt-4 text-center">
           <a href="/UpDownload" className="text-indigo-600 hover:underline flex items-center justify-center">
             <span className="mr-2"></span> Back
           </a>
         </div>
      </div>
      
    </div>
  );
}
