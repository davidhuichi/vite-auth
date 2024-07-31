import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return; 

    setIsSubmitting(true); 

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          }
        }
      });

      if (error) throw error;
      alert('Check your email for verification link');

    } catch (error) {
      alert(error.message || 'An error occurred');
    } finally {
      setIsSubmitting(false); // Restaura el estado de envío
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#dcd1b4]">
      <form onSubmit={handleSubmit} className="bg-[#5e9fa3] p-6 rounded-lg shadow-md w-full max-w-md">
        
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b05574]"
          placeholder='Fullname'
          name='fullName'
          value={formData.fullName}
          onChange={handleChange}
        />
  
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b05574]"
          placeholder='Email'
          name='email'
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
  
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b05574]"
          placeholder='Password'
          name='password'
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
  
        <button 
          type='submit'
          disabled={isSubmitting}
          className={`w-full p-2 rounded-md text-white ${isSubmitting ? 'bg-gray-400' : 'bg-[#b05574] hover:bg-[#fab87f]'} focus:outline-none focus:ring-2 focus:ring-[#b05574]`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <p className="mt-4 text-[#5e9fa3]">
        Already have an account? <Link to='/' className="text-[#f87e7b] hover:underline">Login</Link>
      </p>
    </div>
  );
}

export default SignUp;
