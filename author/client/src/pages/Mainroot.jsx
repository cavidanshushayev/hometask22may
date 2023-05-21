import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './navbar';
const Mainroot = () => {
 
    return (
        <>
       
            <Navbar />
            <Outlet />
        </>
    )
}

export default Mainroot
