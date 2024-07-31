import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { supabase } from '../client';

const Login = ({setToken}) => {
  let navigate = useNavigate()

  const [formData,setFormData] = useState({
        email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      console.log(data)
      setToken(data)
      navigate('/homepage')


    //   alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }




  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#dcd1b4]">
      <form onSubmit={handleSubmit} className="bg-[#5e9fa3] p-6 rounded-lg shadow-md w-full max-w-md">
        
        <input 
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b05574]"
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
  
        <input 
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b05574]"
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange}
        />
  
        <button 
          type='submit'
          className="w-full bg-[#b05574] text-white p-2 rounded-md hover:bg-[#fab87f] focus:outline-none focus:ring-2 focus:ring-[#b05574]"
        >
          Submit
        </button>
  
      </form>
      <p className="mt-4 text-[#5e9fa3]">
        Don't have an account? <Link to='/signup' className="text-[#f87e7b] hover:underline">Sign Up</Link>
      </p> 
    </div>
  )
  
}

export default Login