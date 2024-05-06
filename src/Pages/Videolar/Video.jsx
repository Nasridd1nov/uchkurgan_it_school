import React from 'react'
import { NavLink } from "react-router-dom";
import Video2 from "../../assets/images/video.png"

function Video() {
  return (
    <div>
          <div className="w-[100%]  h-[50px] mt-[1px] bg-[#fff]">
              <h1 className="text-[18px] ml-[35px] pt-[10px]">Videolar</h1>
        </div>
    <div>
                <div className="cart bg-[#fff] mt-[20px]  xl:w-[94.6%] ml-[40px] flex flex-wrap gap-5 md:w-[100%] md:pl-[50px]">
                <div className="flex ml-[25px] pt-[20px] w-[90%] justify-between bg-[#fff] mt-[50px]">
                    <h1 className="font-bold xl:text-[30px] text-[20px] items-center md:text-[28px] ">So'ngni videolar</h1>
                    <NavLink to="/barcha-kurslar" className="font-bold xl:text-[20px] text-[12px] text-[#ffcd70] md:text-[28px]">Barchasini ko'rish <i className='bx bx-right-arrow-alt text-[20px]'></i></NavLink>
                </div>
                  <div className="iteam1 ml-[20px] pt-[20px] bg-[#EEEEEE] xl:w-[300px] xl:h-[500px] h-[470px]  w-[90%] md:w-[40%] md:h-[470px]">
                    <img src={Video2} alt="" className='object-cover ml-[25px] xl:w-[80%] w-[90%]'/>
                    <h1 className='xl:text-[20px] font-bold mt-[10px] ml-[25px] '>Kompyuter nimalardan <br /> iborat?</h1>
                    <h1 className='mt-[10px] ml-[25px] xl:text-[#979797]'>Kurs: <span className='text-[#000] font-bold'>Kompyuter Savodxonligi</span></h1>
                    <h1 className='mt-[10px] ml-[25px] xl:text-[#979797]'>Modul: <span className='text-[#000] font-bold'>Kompyuter Savodxonligi</span></h1>
                    <p className='xl:mt-[45px] ml-[25px]'>0% video darslar yakunlangan.</p>
                  <div className='w-[80%] xl:mt-[10px] h-[10px] rounded-x ml-[25px] l bg-[#ffd6b3] rounded-lg'>
                  </div>
                  </div>
                  <div className="iteam1 ml-[20px] pt-[20px] bg-[#EEEEEE] xl:w-[300px] xl:h-[500px] h-[470px] w-[90%] md:w-[40%] md:h-[470px]">
                    <img src={Video2} alt="" className='object-cover ml-[25px] xl:w-[80%]  w-[90%]'/>
                    <h1 className='xl:text-[20px] font-bold mt-[10px] ml-[25px] '>Teglar   nima?</h1>
                    <h1 className='mt-[10px] ml-[25px] xl:text-[#979797]'>Kurs: <span className='text-[#000] font-bold'>Dasturlash</span></h1>
                    <h1 className='mt-[10px] ml-[25px] xl:text-[#979797]'>Modul: <span className='text-[#000] font-bold'>Frontend <br /> darslari</span></h1>
                    <p className='xl:mt-[45px] ml-[25px]'>0% video darslar yakunlangan.</p>
                  <div className='w-[80%] xl:mt-[10px] h-[10px] rounded-x ml-[25px] l bg-[#ffd6b3] rounded-lg'>
                  </div>
                  </div>
                  <div className="iteam1 ml-[20px] pt-[20px] bg-[#EEEEEE] xl:w-[300px] xl:h-[500px] h-[470px]  w-[90%] md:w-[40%] md:h-[470px]">
                    <img src={Video2} alt="" className='object-cover ml-[25px] xl:w-[80%]  w-[90%]'/>
                    <h1 className='xl:text-[20px] font-bold mt-[10px] ml-[25px] '>Chrome Brauzer</h1>
                    <h1 className='mt-[10px] ml-[25px] xl:text-[#979797]'>Kurs: <span className='text-[#000] font-bold'>Kompyuter Savodxonligi</span></h1>
                    <h1 className='mt-[10px] ml-[25px] xl:text-[#979797]'>Modul: <span className='text-[#000] font-bold'>Kompyuter Savodxonligi <br /> darslari</span></h1>
                    <p className='xl:mt-[45px] ml-[25px]'>0% video darslar yakunlangan.</p>
                  <div className='w-[80%] xl:mt-[10px] h-[10px] rounded-x ml-[25px] l bg-[#ffd6b3] rounded-lg'>
                  </div>
                  </div>
                  <div className="iteam1 ml-[20px] pt-[20px] bg-[#EEEEEE] xl:w-[300px] mb-[170px] xl:h-[500px] h-[470px]  w-[90%] md:w-[40%] md:h-[470px]">
                    <img src={Video2} alt="" className='object-cover ml-[25px] xl:w-[80%]  w-[90%]'/>
                    <h1 className='xl:text-[20px] font-bold mt-[10px] ml-[25px] '>Kirish</h1>
                    <h1 className='mt-[10px] ml-[25px] xl:text-[#979797]'>Kurs: <span className='text-[#000] font-bold'>Photoshop</span></h1>
                    <h1 className='mt-[10px] ml-[25px] xl:text-[#979797]'>Modul: <span className='text-[#000] font-bold'>Grafik Dizayn</span></h1>
                    <p className='xl:mt-[70px] ml-[25px]'>0% video darslar yakunlangan.</p>
                  <div className='w-[80%] xl:mt-[10px] h-[10px] rounded-x ml-[25px] l bg-[#ffd6b3] rounded-lg'>
                  </div>
                  </div>
                 
                </div>
    </div>
    </div>
  )
}

export default Video