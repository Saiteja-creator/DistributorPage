import React from 'react'
import {extendVariants, Button} from "@nextui-org/react";
import { AiOutlineRise } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";


export const Marketing = () => {
  return (
    <div className='flex'>
        <div className='pt-10 pl-2  pb-[150px]'>
            <div className=''>
                <h1 className='text-bold text-3xl'>Does Zono offer marketing support for customer communication?</h1>
                <p className=' break-words w-[600px]'>Utilize Zono for targeted marketing via WhatsApp. Group customers for specific schemes and easily create campaign with predefined templates. Zono ensures timely. personalized communciaton for effective marketing</p>
                <Button color='primary' className='bg-blue-400 text-white rounded-md p-2'>Know More</Button>
            </div>
            <div className='flex flex-row justify-between w-[900px]'>
                <div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2'>
                        <div>
                            <h1 className='font-bold text-lg'>Targeted Scheme Communications</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        < BsBarChart  height={400} className='mt-4'/>
                    </div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2 text-xl'>
                        <div>
                            <h1  className='font-bold text-lg'>Improves Sales</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div>
                            <AiOutlineRise height={100} className='mt-4'/>
                        </div>
                    </div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2'>
                        <div>
                            <h1  className='font-bold text-lg'>Customer Delight</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        <AiOutlineRise height={100} className='mt-4'/>
                    </div>
                    
                </div>
                <img src="https://www.zonoapp.com/img/credit-zono-home.png"  alt="ss" className='w-[130px] h[130px]'/>
            </div>
        </div>
        
    </div>
  )
}