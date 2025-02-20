'use client';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      alert('Login Successful!');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100">
      
      <div className=" p-8 bg-blue-200 rounded shadow-md w-96">
      <div className="top-4 left-4"> <a href="/HOME" className="text-indigo-600 hover:underline flex items-center"> <span className="mr-2">←</span> </a> </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2"><b>Email:</b></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2"><b>Password:</b></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className=' space-y-5'>
          {error && <p className="text-red-500 mb-4">{error}</p>} 
          <div className="mt-4 text-center">
           <a href="/Dashbord" className="text-indigo-600 hover:underline flex items-center justify-center">
             <span className="mr-2"></span> <button className='bg-blue-700 p-3 text-white font-semibold'>Log In</button>
           </a>
         </div>
      
         </div>

          <div className="mt-4 text-center ">
          <div className="mt-4 text-center text-black">
           <a href="/ForgetPass" className="text-red-700 hover:underline flex items-center justify-center">
             <span className=" font-semibold mr-2"><b></b></span> <b>Forget Password</b>
           </a>
         </div>
           <a href="/CreateAccount" className="text-indigo-600 hover:underline flex items-center justify-center">
             <span className=" font-semibold mr-2"></span><b> Create Account</b>
           </a>
         </div>
        </form>
      </div>
    </div>
  );
};  

export default LoginPage;
