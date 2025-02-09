import React, { useState } from 'react'
import { IoLogOutOutline } from "react-icons/io5";
import axios from 'axios';
import cookies from "js-cookie";
import toast from "react-hot-toast"

function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async ()=>{
    setLoading(true);
    try {

      const response = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      cookies.remove("jwt");
      setLoading(false);
      toast.success(response.data.message);
      window.location.href = "/signin";

    } catch (error) {
      console.log("error in logout",error);
      toast.error(response?.data?.error || error);
    }
  }
  return (
    <div className='h-[10vh]'>
      <button className='px-3 py-3'>  
         <IoLogOutOutline 
          onClick={handleLogout}
         className='text-5xl text-white hover:bg-slate-700 cursor-default rounded-full duration-300 mt-1 '/>
      </button>              
    </div>
    )
}

export default Logout