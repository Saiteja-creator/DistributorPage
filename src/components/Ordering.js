import React from 'react'
import {extendVariants, Button} from "@nextui-org/react";
import { AiOutlineRise } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";


export const Ordering = () => {
  return (
    <div className='flex'  id='order'>
        <div className='pt-10 pl-2 pb-[150px]'>
            <div className=''>
                <h1 className='text-bold text-3xl'>How does it help me in receiving orders in multiple formats?</h1>
                <p className=' break-words w-[600px]'>Zono simplifies distributor tasks, automating 90% of order processing. It organizes varied order types for smooth handling via a chat interface,
                enhancing customer relationships and reducing processing time</p>
                <Button color='primary' className='bg-blue-400 text-white rounded-md p-2'>Know More</Button>
            </div>
            <div className='flex flex-row justify-between w-[900px]'>
                <div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2'>
                        <div>
                            <h1 className='font-bold text-lg'>75% Lower TAT for Order Processing</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        < BsBarChart  height={400} className='mt-4'/>
                    </div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2 text-xl'>
                        <div>
                            <h1  className='font-bold text-lg'>Improves customer base</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div>
                            <AiOutlineRise height={100} className='mt-4'/>
                        </div>
                    </div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2'>
                        <div>
                            <h1  className='font-bold text-lg'>Real time order tracking</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        <AiOutlineRise height={100} className='mt-4'/>
                    </div>
                    
                </div>
                <img src="https://www.zonoapp.com/img/home-computer.png"  alt="ss" className='w-[130px] h[130px]'/>
            </div>
        </div>
        
    </div>
  )
}
