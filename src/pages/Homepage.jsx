import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = ({token}) => {

    let navigate = useNavigate()

    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
    }


    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#dcd1b4]">
          <div className="bg-[#5e9fa3] p-6 rounded-lg shadow-md w-full max-w-md text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                  Welcome back, {token.user.user_metadata.full_name}
              </h3>
              <button 
                  onClick={handleLogout}
                  className="w-full bg-[#b05574] text-white p-2 rounded-md hover:bg-[#fab87f] focus:outline-none focus:ring-2 focus:ring-[#b05574]"
              >
                  Logout
              </button>
          </div>
      </div>
  );
  
}

export default Homepage;