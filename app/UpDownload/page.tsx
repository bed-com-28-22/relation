
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
     
      
      
      <div className="absolute inset-0 flex flex-col  justify-bewteen text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl text-orange-500 md:text-6xl font-bold mb-4">
        University of Malawi Online Lecturing
        </h1>
        <p className="text-2xl md:text-4xl text-blue-700 mb-8"></p>
        <div className='justify-between content-center text-green-700 '>
          
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
