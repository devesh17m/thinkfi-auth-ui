import React, { useState } from 'react';
import axios from 'axios';
import { BiSolidUser } from "react-icons/bi";
import { BiSolidLock } from "react-icons/bi";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/archivetool/login/', { email, password });
      // Reset form after successful login
      setEmail('');
      setPassword('');
      setError('');
      console.log(response);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className='flex flex-col h-[80vh] justify-center items-center'>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='relative my-8 '>
            <input
              className='bg-gray-100 border-2 border-gray-300 text-center focus:outline-none rounded block w-72 py-2 text-sm'
              type="email"
              id="email"
              value={email}
              placeholder='Username'
              onChange={(e) => setEmail(e.target.value)}
            />
            <BiSolidUser className='absolute top-3 ml-4'/>
          </div>
          <div className='relative my-3'>
            <input
              className='bg-gray-100 border-2 border-gray-300 text-center focus:outline-none rounded block w-72 py-2 text-sm'
              type="password"
              id="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <BiSolidLock className='absolute top-3 ml-4'/>
          </div>
          <div className='flex justify-between mb-4'>
            <span className='text-gray-400 text-sm cursor-pointer'>Remember Me</span>
            <span className='text-gray-400 text-sm cursor-pointer'>Forgot Password?</span>
          </div>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className='bg-sky-800 flex justify-start text-white py-1.5 px-12 rounded text-sm' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
