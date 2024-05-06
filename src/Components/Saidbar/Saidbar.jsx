import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  
    return (
      <div className="App pl-[15px] w-[300px] bg-[#fff] h-[875px]">
        <div className="">
          <div className="sidebar text-[17px]">
            <NavLink to="/" className="flex items-center gap-3 leading-[50px]">
            <i class='bx bx-home text-[25px] opacity-30' ></i>
            <h1>Bosh Sahifa</h1>
            </NavLink>
            <NavLink to="/admin" className="flex items-center gap-3 leading-[50px]">
            <i class='bx bx-code-block text-[25px] opacity-40' ></i>
            <h1>Mening kurslarim</h1>
            </NavLink>
            <NavLink to="/Barcha-kurslar" className="flex items-center gap-3 leading-[50px]">
            <i class='bx bxl-codepen text-[25px] opacity-40'></i>
            <h1>Barcha kurslar</h1>
            </NavLink>

            <NavLink to="/video" className="flex items-center gap-3 leading-[50px]">
            <i class='bx bx-play-circle text-[25px] opacity-40'></i>
            <h1>Videolar</h1>
            </NavLink>

            <NavLink to="/Sertificat" className="flex items-center gap-3 leading-[50px]">
            <i class='bx bxl-firebase text-[25px] opacity-40'></i>
            <h1>Sertifikatlarim</h1>
            </NavLink>






            <NavLink to="/Logout" className="flex items-center gap-3 leading-[50px] mt-[500px] ml-[20px]">
            <i class='bx bx-log-in text-[25px]'></i>
            <h1 className="text-[red] text-[20px] ">Chiqsh</h1>
            </NavLink>
          
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  