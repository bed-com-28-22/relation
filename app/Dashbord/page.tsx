'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Dashbord() {
  

  return (
    <div>
         <Head>
        <title>University of Malawi Online Lecturing</title>
      </Head>
      <Image
        src="/background.jpg"
        alt="University of Malawi"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl text-orange-500 md:text-6xl font-bold mb-4">
          University of Malawi online lecturing
        </h1>
        <p className="text-2xl md:text-4xl text-blue-700 mb-8">Learn, Know and Apply</p>
          <div className="mt-4 text-center">
           <a href="/UpDownload" className="text-green-900 hover:underline flex items-center justify-center">
             <span className="mr-2"></span> <b>ASK</b>
           </a>
           <div className="mt-4 text-center">
           <a href="/UpDownload" className="text-green-900 hover:underline flex items-center justify-center">
             <span className="mr-2"></span><b> ANSWERS</b>
           </a>
        <div className="mt-4 text-center">
           <a href="/HOME" className="text-green-900 hover:underline flex items-center justify-center">
             <span className="mr-2"></span> <b>HOME</b>
           </a>
         </div>
         </div>
         <div className="mt-4 text-center">
           <a href="/HOME" className="text-indigo-600 hover:underline flex items-center justify-center">
             <span className="mr-2"></span> <b>Back</b>
           </a>
         </div>
    </div>
    </div>
    </div>
   
  );
}
