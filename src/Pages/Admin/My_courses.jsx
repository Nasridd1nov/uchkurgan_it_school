import React from "react";
import Administration from "../../assets/images/Administration.png"
import Smm from "../../assets/images/Smm.jpg"
import Ds from "../../assets/images/Ds.png"
import Reactt from "../../assets/images/Reactt.png"
import Django from "../../assets/images/Django.png"

export default function My_courses(){
  

    return(
       <div className="courses">
        <div className="navbar p-[10px]  w-[1602px] bg-[#fff] h-[50px]">
            <h1 className="text-[15px] font-semibold">Mening Kurslarim</h1>
        </div>
        <div className="administration w-[1585px] h-[150px] bg-[#fff] border m-[20px] flex  gap-[750px] items-center rounded-[15px]">
            <div className="div-1 flex gap-[10px]">
            <img src={Administration} alt="" />
            <div className="item">
                <h1 className="mt-[20px] font-bold text-[18px] mb-[34px]">Kompyuter Savodhonligi kursi</h1>
                <p className="text-[9px] mb-[15px]">15% videodars yakunlangan</p>
                <div className="progres w-[260px] bg-[#fff] h-[8px] border rounded-[10px]">
                    <div className="progress w-[50px] rounded-[10px] h-[8px] bg-[#4E80EE]"></div>
                </div>
            </div>
            </div>
            <div className="div-2  mt-[-40px] ">
                <div className="dars flex mb-[30px] gap-[30px]">
                <div className="dars-soni1">
                    <h1 className="text-[18px]"><i class='bx bx-movie-play'></i> Darslar soni</h1>
                </div>
                <div className="dars-soni2">
                    <h1 className="text-[18px]"><i class='bx bx-stopwatch' ></i> Kurs davomiyligi</h1>
                </div>
                </div>
                <div className="dars-soni3">
                <button className="w-[300px] text-[#fff]  h-[28px] border bg-[#4E80EE] rounded-[10px]">Batafsil</button>
                </div>
                
            </div>
        </div>
        <div className="my_cources w-[1585px] h-[230px] rounded-[15px] bg-[#fff] border m-[20px]  gap-[750px]">
            <h1 className="p-[20px] text-[18px] font-bold">Mening Kurslarim</h1>
            <p className="text-center opacity-[0.5] pt-[15px]">Hozirda sizga hech qanday kurs mavjud emas</p>
            <button className="ml-[680px] h-[40px] rounded-full text-[#fff] bg-[#4E80EE] mt-[20px] w-[160px] border">Kurslar harid qilish</button>
        </div>




        <div className="div w-[1570px] h-[380px] bg-[#fff] ml-[20px] rounded-[10px]">
                <div className="about">
                    <h1 className="font-bold text-[18px] relative top-[30px] left-[20px]">Sizga tavsiya etamiz</h1>
                </div>
                <div className="items flex items-center p-[15px] gap-[40px] mt-[50px]">
                    <div className="item-1 bg-[#F7F7F5] w-[350px] h-[250px] rounded-[10px] p-[10px]">
                        <img src={Smm} alt="" className="w-[380px] rounded-[10px] h-[180px] mb-[10px]"/>
                        <button className=" font-bold ">Dasturlash</button>
                        <h1 className="">Foundation</h1>
                    </div>
                    <div className="item-1 bg-[#F7F7F5] w-[350px] h-[250px] rounded-[10px] pl-[20px]">
                        <img src={Ds} alt=""  className="w-[380px] rounded-[10px] h-[180px] mb-[10px]"/>
                        <button className="font-bold">Dasturlash</button>
                        <h1 className="">Foundation</h1>
                    </div>
                    <div className="item-1 bg-[#F7F7F5] w-[350px] h-[250px] pl-[20px]">
                        <img src={Reactt} alt=""  className="w-[380px] rounded-[10px] h-[180px] mb-[10px]"/>
                        <button className="font-bold">Dasturlash</button>
                        <h1 className="">Foundation</h1>
                    </div>
                    <div className="item-1 bg-[#F7F7F5] w-[350px] h-[250px] rounded-[10px] pl-[20px]">
                        <img src={Django} alt=""  className="w-[380px] rounded-[10px] h-[180px] mb-[10px]"/>
                        <button className="font-bold">Dasturlash</button>
                        <h1 className="">Foundation</h1>
                    </div>
                </div>
            </div>
       </div>
    )
} 