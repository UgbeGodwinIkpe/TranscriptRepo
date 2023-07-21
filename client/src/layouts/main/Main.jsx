// rrd imports
import { Outlet } from "react-router-dom";

// react imports
import React from 'react'

// components imports
import { Navbar } from "../../components";

function Main() {

  return (
    <div className="w-full flex flex-col w-full h-screen fixed ">
        <Navbar/>
        <div className="flex-1 grid grid-cols-1 overflow-y-scroll h-auto">
            <Outlet/>
        </div>
    </div>
  )
}

export default Main