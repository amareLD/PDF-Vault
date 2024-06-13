// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Register = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/users/register', {
        name,
        email,
        password,
      });
      setUser(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-black p-6 rounded-lg shadow-md">
        <h1 className="text-2xl text-white font-bold text-center mb-6">Register</h1>
        <form className=" " onSubmit={handleRegister}>
          <div className="mb-5">
            <label
              className="block text-neutral-400 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-neutral-400 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-10">
            <label
              className="block text-neutral-400 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 px-4 rounded-2xl hover:bg-white  hover:text-black border-4 border-neutral-400 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
