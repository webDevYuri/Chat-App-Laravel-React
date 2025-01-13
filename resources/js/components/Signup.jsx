import React, { useState } from 'react';
import logo from '../../../public/assets/logo.png'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('')

    const handleSignup = (event) => {
        event.preventDefault();
        if (username === '' || email === '' || password === '') {
            setError('All fields are required')

        } else if (password !== confirmPassword) {
            setError('Password do not match')

        } else {
            setError('');
            console.log('created successfully')
        }
    };

  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded-lg px-8 py-10 relative" id='signupForm'>
          <img src={logo} alt="logo"  className='w-[100px] place-self-center'/>
          <div className='flex flex-col items-center mb-10'>
            <h2 className="text-2xl font-bold text-gray-600">Create new account</h2>
            <span>Enter Your Credentials</span>
          </div>
          {error && <div className='text-red-500 mb-4 text-center absolute top-[27%] left-1/2 -translate-x-1/2'>{error}</div>}
          <div className="mb-3">
            <input
              className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="username"
              type="text"
              placeholder="Username"
              autoComplete='off'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="email"
              type="text"
              placeholder="Email"
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className='flex mb-3'>
            <button 
                className='bg-green-500 w-full hover:bg-green-600 duration-100 ease-in text-white font-semibold py-2 px-4 focus:outline-none'
                onClick={handleSignup} 
            >
                Sign Up
            </button>
          </div>
          <div className="flex justify-center gap-1">
            <span>Already have an account?</span>
            <Link to='/' className='text-blue-600'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
