import React from 'react'
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import hotelimg from "../../../assets/luxuryliving.jpg"
function HotelList() {
  return (
    <div className='co mx-auto'>
         <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img src={hotelimg} alt="" />
                <div>
                    <h1 className='text-2xl font-semibold'>Rhoncus suspendisse penatibus mauris, sit non</h1>
                    <div className='flex items-center gap-3 '>
                        <p className='flex items-center gap-1 font-semibold'><IoBed className='text-2xl '/> 1 Bedroom</p>
                        <p className='flex items-center gap-1 font-semibold'><FaBath className='text-2xl '/> 1 Bath</p>
                        <p className='flex items-center gap-1 font-semibold'><FaWifi className='text-2xl '/> Wifi</p>
                    </div>
                    <h1 className='text-lg font-semibold'>City view  |  3rd floor  |  Elevator | Parking </h1>
                    <div className='flex items-center text-lg font-semibold'>
                        <h3>Available 28 Nov 2021</h3>
                        <h3>from £3490 /month</h3>
                    </div>
                </div>
            </div>
            <div></div>
         </div>
    </div>
  )
}

export default HotelList