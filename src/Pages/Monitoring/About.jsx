import React from "react";
import Smm from "../../assets/images/Smm.jpg"
import Ds from "../../assets/images/Ds.png"
import Reactt from "../../assets/images/Reactt.png"
import Django from "../../assets/images/Django.png"

function About() {
    return(
        <div className="About">
            <div className="navbar w-[1620px] h-[50px] bg-[#fff] p-[15px]">
                <h1>Bosh sahifa</h1>
            </div>
            <div className="cources p-[20px]  flex  gap-[20px]">
                <div className="movie w-[1150px] bg-[#fff] h-[500px] rounded-[10px]">
                    <div className="nav flex justify-between pt-[20px] pl-[20px] pr-[20px]">
                        <h3>Songi Korilgan</h3>
                        <p className="">Kompyuter savodhonligi <i class='bx bx-chevron-down' ></i>/ Kompyuter savodhonligi <i class='bx bx-chevron-down' ></i></p>
                    </div>
                    <div className="see-movies flex bg-[#F9F9F9] mt-[70px] w-[93%] ml-[40px] gap-[20px] rounded-[20px] mb-[20px] ">
                    <i class='bx bx-play  text-[250px] bg-[gainsboro] rounded-[20px]'></i>
                    <div className="course mt-[40px] ml-[10px]">
                        <h1 className="mb-[10px]">Kompyuter nimadan iborat ?</h1>
                        <div className="curs flex gap-[20px] mb-[10px]">
                            <h1>- Kurs:</h1>
                            <p>Kompyuter Savodhonligi kursi</p>
                        </div>
                        <div className="curs flex gap-[20px] mb-[10px]">
                            <h1>- Modul:</h1>
                            <p>Kompyuter Savodhonligi darslari</p>
                        </div>
                        <div className="curs flex gap-[20px]">
                            <h1>- Mavzu:</h1>
                            <p>Kompyuter</p>
                        </div>
                    </div>
                    </div>
                    <div className="see-course ml-[40px]">
                        <p className="mb-[10px] text-[12px]">15% videodars yakunlangan</p>

                        <div className="progres w-[96%] bg-[#E5E5E5] border rounded-[5px]  h-[8px]">
                            <div className="progress relative bg-[#4E80EE] rounded-[5px] w-[25%] h-[8px]"></div>
                        </div>
                    </div>
                </div>
                <div className="variant">
                    <div className="smm bg-[#fff] w-[400px] h-[500px] rounded-[10px] p-[15px]">
                        <div className="choose  w-[370px] h-[300px] bg-[#F7F7F5] p-[10px] rounded-[10px]">
                            <h1 className="text-[12px] mb-[10px]">Tavsiya etamiz ;</h1>
                        <img src={Smm} alt="" className="rounded-[10px]"/>
                        <p className="text-[12px] font-bold mt-[10px]">Foundation kursini o`rganish uchun bepul manbalar</p>
                        <h2 className="text-[12px] text-[blue] mt-[10px]">Batavsil</h2>

                        <div className="savodhonlik bg-[#F7F7F5] w-[370px] h-[100px] relative top-[50px] left-[-10px] rounded-[10px] p-[10px]">
                            <div className="flx flex items-center gap-[10px]">
                                <div className="icon">
                                <i class='bx bx-code-block text-[blue]' ></i>
                                </div>
                                <div className="item">
                                    <h1 className="text-[12px] font-bold">Kompyuter savodhonligi kursi</h1>
                                    <h3 className="text-[12px]">Boshqa</h3>
                                </div>
                            </div>
                            <div className="progress">
                                <h1 className="text-[10px] mt-[15px] mb-[5px]">4% videodarslar yakunlangan</h1>
                                <div className="line w-[100%] h-[3px] bg-[#E5E5E5]">
                                    <div className="linee w-[10%] h-[3px] bg-[blue] rounded-[10px]"> </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div w-[1570px] h-[280px] bg-[#fff] ml-[20px] rounded-[10px]">
                <div className="about">
                    <h1>Sizga tavsiya etamiz</h1>
                </div>
                <div className="items flex items-center p-[15px] gap-[40px]">
                    <div className="item-1 bg-[#F7F7F5] w-[350px] h-[220px] rounded-[10px] pl-[20px]">
                        <img src={Smm} alt="" className="w-[200px] ml-[50px] mt-[20px] rounded-[10px] h-[110px]"/>
                        <button className="w-[140px] font-bold bg-[#111] text-[#fff] h-[35px] rounded-[8px] mt-[20px] ml-[20px]">Dasturlash</button>
                        <h1 className="font-bold ml-[50px]">Foundation</h1>
                    </div>
                    <div className="item-1 bg-[#F7F7F5] w-[350px] h-[220px] rounded-[10px] pl-[20px]">
                        <img src={Ds} alt=""  className="w-[200px] ml-[50px] mt-[20px] rounded-[10px] h-[110px]"/>
                        <button className="w-[140px] font-bold bg-[#5EC269] text-[#fff] h-[35px] rounded-[8px] mt-[20px] ml-[20px]">Dasturlash</button>
                        <h1 className="font-bold ml-[50px]">Foundation</h1>
                    </div>
                    <div className="item-1 bg-[#F7F7F5] w-[350px] h-[220px] rounded-[10px] pl-[20px]">
                        <img src={Reactt} alt=""  className="w-[200px] ml-[50px] mt-[20px] rounded-[10px] h-[110px]"/>
                        <button className="w-[140px] font-bold bg-[#111] text-[#fff] h-[35px] rounded-[8px] mt-[20px] ml-[20px]">Dasturlash</button>
                        <h1 className="font-bold ml-[50px]">Foundation</h1>
                    </div>
                    <div className="item-1 bg-[#F7F7F5] w-[350px] h-[220px] rounded-[10px] pl-[20px]">
                        <img src={Django} alt=""  className="w-[200px] ml-[50px] mt-[20px] rounded-[10px] h-[110px]"/>
                        <button className="w-[140px] font-bold bg-[#111] text-[#fff] h-[35px] rounded-[8px] mt-[20px] ml-[20px]">Dasturlash</button>
                        <h1 className="font-bold ml-[50px]">Foundation</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;