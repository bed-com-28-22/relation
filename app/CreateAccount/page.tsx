'use client'
import { useState } from 'react';

const CreateAccountPage = () => {
  const [Firstname, setFirstname] = useState('');
  const [SurName, setSurName] = useState('');
  const [UserName, setUserName] = useState('');
  const [EnterEmail, setEnterEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Mock account creation function
    if (Firstname && EnterEmail && UserName && password && password === confirmPassword) {
      alert('Account Created Successfully!');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('All fields are required');
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
       
      <div className=" p-8 rounded shadow-md bg-blue-300 w-96">
      <div className="top-4 left-4"> <a href="/login" className="text-indigo-600 hover:underline flex items-center"> <span className="mr-2"><b>←</b></span> </a> </div> 
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
    
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2"><b>First Name:</b></label>
            <input
              type="text"
              id="username"
              value={Firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-2"><b>SurName:</b></label>
            <input
              type="text"
              id="Surname"
              value={SurName}
              onChange={(e) => setSurName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-2"><b>UserName:</b></label>
            <input
              type="text"
              id="Surname"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2"><b>Enter Email:</b></label>
            <input
              type="email"
              id="email"
              value={EnterEmail}
              onChange={(e) => setEnterEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2"><b>Confirm Password:</b></label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
        

           <a href="/LogIn" className="text-indigo-600 hover:underline flex items-center justify-center">
             <span className="mr-2 font-semibold">   Create Account</span>
           </a>

          
          <div className="mt-4 text-center">
           <a href="/LogIn" className="text-indigo-600 hover:underline flex items-center justify-center">
             <span className=" font-semibold mr-2"></span><b>Back To LogIn</b> 
           </a>
         </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
