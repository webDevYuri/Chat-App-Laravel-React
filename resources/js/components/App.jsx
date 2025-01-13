import React, { useState } from 'react';
import logo from '../../../public/assets/logo.png'
import { Link } from 'react-router-dom'

const App = () => {
  const [passwordType, setPasswordType] = useState('password');
  const[email, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');

  const togglePassword = (event) => {
    event.preventDefault();
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if(email === '' || password === ''){
      setError('All fields are required');
  } else {
    setError('');
    console.log('Login successful');
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded-lg px-8 py-10 relative" id='loginForm'>
          <img src={logo} alt="logo"  className='w-[100px] place-self-center'/>
          <div className='flex flex-col items-center mb-10'>
            <h2 className="text-2xl font-bold text-gray-600">Welcome Back</h2>
            <span>Enter valid credential</span>
          </div>
          {error && <div className='text-red-500 mb-4 text-center absolute top-[33%] left-1/2 -translate-x-1/2'>{error}</div>}
          <div className="mb-4 relative">
            <input
              className="appearance-none border w-full py-3 ps-[50px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Email"
              autoComplete='off'
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="fa-solid fa-envelope absolute top-1/2 left-3 text-[20px] border-r border-gray-500 pe-2 -translate-y-1/2"></i>
          </div>
          <div className="mb-6 relative">
            <input
              className="appearance-none border w-full py-3 ps-[50px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="password"
              type={passwordType}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="fa-solid fa-lock absolute top-1/2 left-3 text-[20px] border-r border-gray-500 pe-2 -translate-y-1/2"></i>
            <i id='showPassword' onClick={togglePassword} className={`fa-solid ${passwordType === 'password' ? 'fa-eye-slash' : 'fa-eye'} absolute top-1/2 right-3 text-[15px] -translate-y-1/2`}></i>
          </div>
          <div className="flex items-center mb-3">
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 duration-100 ease-in text-white font-semibold py-2 px-4 focus:outline-none"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className='flex text-center'>
            <Link to='/signup' className='bg-green-500 w-full hover:bg-green-600 duration-100 ease-in text-white font-semibold py-2 px-4 focus:outline-none'>
              Create new user
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
