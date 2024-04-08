import React from 'react'
import {extendVariants, Button} from "@nextui-org/react";
import { AiOutlineRise } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";


export const Collections = () => {
  return (
    <div className='flex' id="Collections">
        <div className='pt-10 pl-2  pb-[150px]'>
            <div className=''>
                <h1 className='text-bold text-3xl'>I have problem with payment with payment collections</h1>
                <p className=' break-words w-[600px]'>Zono automates payment reminders via SMS, email,and WhatsApp, Improving collection rates.
                It FAcilitates online payments and reconciles quickly. also handling offline payment and generating receipts for timely reconcillation. </p>
                <Button color='primary' className='bg-blue-400 text-white rounded-md p-2'>Know More</Button>
            </div>
            <div className='flex flex-row justify-between w-[900px]'>
                <div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2'>
                        <div>
                            <h1 className='font-bold text-lg'>Empower Digital Payments</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        < BsBarChart  height={400} className='mt-4'/>
                    </div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2 text-xl'>
                        <div>
                            <h1  className='font-bold text-lg'>Improves Cashflow</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div>
                            <AiOutlineRise height={100} className='mt-4'/>
                        </div>
                    </div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2'>
                        <div>
                            <h1  className='font-bold text-lg'>Incentivize Digital Payments</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        <AiOutlineRise height={100} className='mt-4'/>
                    </div>
                    
                </div>
                <img src="https://www.zonoapp.com/img/credit-zono-home.png"  alt="ss" className='w-[200px] h[130px]'/>
            </div>
        </div>
        
    </div>
  )
}
