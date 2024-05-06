import Logo from "../../assets/images/Logo.jpg"
export default function Header(){
    return(
        <div className="navbar flex justify-between p-[10px] items-center border-b border-black bg-[#fff]">
            <div className="logo flex gap-5">
            <i class='bx bx-menu text-[30px]'></i>
            <div className="flex ">
            <h1 className="font-semibold">It School</h1>
            <img src={Logo} alt="" className="w-[30px] h-[30px]"/>
            <h1 className="font-semibold">Uchkurgan</h1>
            </div>
            </div>
            <div className="login flex items-center gap-2">
            <i class='bx bx-bell text-[20px] opacity-50'></i>
            <i class='bx bx-user text-[35px] rounded-[50%] border-[2px] bg-[#f1f1f1]' ></i>
            <div className="flx">
                <h1 className="text-[15px] font-bold">Nasriddinov Nodirbek</h1>
                <p className="text-[15px]">Oquvchi</p>
            </div>
            </div>
        </div>
    )
}