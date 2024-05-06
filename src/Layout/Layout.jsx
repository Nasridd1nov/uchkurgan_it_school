import React from 'react';
import { Outlet } from 'react-router-dom';
import Saidbar from "../Components/Saidbar/Saidbar";
import Header from '../Components/Header/Header';

const Layout = () => {
   
    return (
        <div className=''>
        <Header/>

        <main className='flex'>
        <div>
            <Saidbar/>
        </div>
            <div className="">
                <Outlet/>
            </div>
            
        </main>
    </div>
    );
};

export default Layout;