import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/users/auth', { email, password });
      localStorage.setItem('token', response.data.token); // Store token in local storage
      setUser({ token: response.data.token });
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-cente">
      <form
        onSubmit={handleLogin}
        className="max-w-full px-10  py-10 mx-auto p-6 bg-black shadow-lg rounded-lg"
      >
        <div className="mb-5 w-96   ">
          <label
            className="block text-neutral-400 text-sm font-bold mb-2 "
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-10 96 ">
          <label
            className="block text-neutral-400 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="flex   items-center justify-between">
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 px-4 rounded-2xl hover:bg-white hover:text-black border-4 border-neutral-400 transition duration-300"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
