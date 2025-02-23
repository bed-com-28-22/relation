'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const  ForgotPassword=()=> {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('/background.jpg')" }}>
       <Head>
        <title>University of Malawi Online Lecturing</title>
      </Head>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl text-orange-500 md:text-6xl font-bold mb-4">
          University of Malawi online lecturing
        </h1>
        <p className="text-2xl md:text-4xl text-blue-700 mb-8"></p>
        <div className='justify-between content-center text-green-700 '>
          
        </div>
      <div className="bg-opacity-75 p-8 bg-blue-300 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-4">
          <div className="top-4 left-4">
            <a href="/LogIn" className="text-indigo-600 hover:underline flex items-center">
              <span className="mr-2">←</span>
            </a>
          </div>
          <div className="text-2xl font-bold mb-2">Forget Password</div>
          <p className="text-gray-600">Enter your email and we will send a link to reset your password</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700"><b>Email:</b></label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/LogIn" className="text-indigo-600 hover:underline flex items-center justify-center">
            <span className="font-semibold mr-2"></span><b>Back To LogIn</b>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
export default ForgotPassword;