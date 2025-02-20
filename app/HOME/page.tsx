'use client'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
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
        <div className='justify-between content-center text-green-700 '>
          <Link href="/LogIn" passHref>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className='text-blue-800'>
       
      </div>
    </div>
  );
}
