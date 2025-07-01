import React, { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Register = () => {
  const { registerUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();



  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    setError('');

    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    registerUser(email, password)
      .then((result) => {
        // Optional: update profile with display name
        result.user.displayName = name;
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };


 // google login:
  const handleGoogleogin = () =>{
    googleLogin()
    .then(result => {
        console.log(result)
    })

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
      {/* google login */}
      <div>
            <button onClick={handleGoogleogin}  className='btn'>Google</button>
      </div>
    </div>
  );
};

export default Register;
