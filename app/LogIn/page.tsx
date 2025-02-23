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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl text-orange-500 md:text-6xl font-bold mb-4">
          University of Malawi Online Lecturing
        </h1>
        <p className="text-2xl md:text-4xl text-blue-700 mb-8"></p>
        <div className="bg-blue-200 p-8 rounded shadow-md w-96 text-center">
          <div className="mb-4">
            <a href="/HOME" className="text-indigo-600 hover:underline flex items-center">
              <span className="mr-2">←</span>
            </a>
          </div>
          <h2 className="text-2xl text-blue-700 font-bold mb-6">Log In</h2>
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
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mt-4">
              <button type="submit" className="bg-blue-700 p-3 text-white font-semibold w-full">Log In</button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <a href="/ForgetPass" className="text-red-700 hover:underline flex items-center justify-center">
              <span className="font-semibold mr-2"></span><b>Forget Password</b>
            </a>
          </div>
          <div className="mt-4 text-center">
            <a href="/CreateAccount" className="text-indigo-600 hover:underline flex items-center justify-center">
              <span className="font-semibold mr-2"></span><b>Create Account</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
