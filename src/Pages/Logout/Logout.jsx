import React from "react";
import Logo from "..//..//assets/images/Logo.jpg"
import { NavLink } from "react-router-dom";

export default function Logout(){
  

    return(
        <div className="container mx-auto bg-[#fff] w-[1000px] pt-[30px] pb-[100px] mt-[70px]">
        <div className="logo flex items-center gap-5 justify-center mb-[20px]">
          <h1 className='text-[30px] border-bold font-semibold relative left-[40px]'>Admin Page</h1>
        </div>
        <div className="item flex  gap-[70px]">
          <img src={Logo} alt="" className='w-[400px] relative left-[50px] mt-[-20px]'/>
          <div className="input">
            <h1 className='font-bold text-[25px] mb-[80px]'>Sign in yo platform</h1>

            <p>Your Email</p>
            <input type="text" placeholder='Name@gmail.com' className='border-[2px] border-black w-[450px] rounded-[5px] mb-[20px]'/>

            <p>Your pasword</p>
            <input type="pasword" className='border-[2px] border-black w-[450px] rounded-[5px] mb-[10px]'/>
 
            <div className="chekbox flex gap-2">
            <input type="checkbox" />
            <h3>Eslab Qolish</h3>
            </div>
        
            <NavLink to="/" className='bg-[#2649E0] w-[180px] p-[8px] text-[#fff] relative top-[20px] rounded-[5px]'>Login to yo Account</NavLink>
            
            <h6 className='mt-[30px] text-[14px]'>Not Registered? <span className='text-[#6D639C]'>Create account</span></h6>
          </div>
        </div>
      </div>
    )
} 