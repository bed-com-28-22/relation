// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Head>
        <title>File Management</title>
      </Head>
      <div 
        className="min-h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute top-4 left-4">
          
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-5 bg-black bg-opacity-50">
        <div className="top-4 left-4"> <a href="/Upload" className="text-indigo-600 hover:underline flex items-center"> 
        <span className="mr-2"></span><button className='bg-white font-semibold rounded-md px-7 py-3'>Upload </button>
        </a> 
        </div>
          <div className="top-4 left-4"> <a href="/Download" className="text-indigo-600 hover:underline flex items-center"> 
          <span className="mr-2"></span><button className='bg-white font-semibold rounded-md px-7 py-3'>Download</button>
          </a>
           </div>
           <div className="mt-4 text-center">
           <a href="/Dashbord" className="text-indigo-600 hover:underline flex items-center justify-center">
             <span className="mr-2"></span> Back
           </a>
         </div>
        </div>
      </div>
    </div>
  );
}
