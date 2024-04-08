import React from 'react'
import {extendVariants, Button} from "@nextui-org/react";
import { AiOutlineRise } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";


export const Reconcilliation = () => {
  return (
    <div className='flex' id="Reconcilation">
        <div className='pt-10 pl-2 pb-[150px]'>
            <div className=''>
                <h1 className='text-bold text-3xl'>How to manage varied payments (offline and online)</h1>
                <p className=' break-words w-[600px]'>Zono auto-reconciles UPI paymnets swifty, linking them first with reatilers and then with invoices,eliminating manual efforts for reconcilliation. </p>
                <Button color='primary' className='bg-blue-400 text-white rounded-md p-2'>Know More</Button>
            </div>
            <div className='flex flex-row justify-between w-[900px]'>
                <div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2'>
                        <div>
                            <h1 className='font-bold text-lg'>Auto Reconciliation</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        < BsBarChart  height={400} className='mt-4'/>
                    </div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2 text-xl'>
                        <div>
                            <h1  className='font-bold text-lg'>Same Day Settlement</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div>
                            <AiOutlineRise height={100} className='mt-4'/>
                        </div>
                    </div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2'>
                        <div>
                            <h1  className='font-bold text-lg'>Simplified Ledger</h1>
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