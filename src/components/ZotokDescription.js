import React from 'react'
import {extendVariants, Button} from "@nextui-org/react";
import { AiOutlineRise } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";


export const ZotokDescription = () => {
  return (
    <div className='flex' id='What Does Zotalk do?'>
        <div className='pt-10 pl-2 pb-[150px]' id='zotok'>
            <div className=''>
                <h1 className='text-bold text-3xl'>What Can Zotok do?</h1>
                <p className=' break-words w-[600px]'>Zotok revolutionizes distributor connections, merging whatsApp's ease with a rewarding chat
                    interface. Streaminged orders, prompt payments, vibrant marketing, and a linked network spur business growth, promoting collaboration </p>
                <Button color='primary' className='bg-blue-400 text-white rounded-md p-2'>Know More</Button>
            </div>
            <div className='flex flex-row justify-between w-[900px]'>
                <div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2'>
                        <div>
                            <h1 className='font-bold text-lg'>Increases Turnover</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        < BsBarChart  height={400} className='mt-4'/>
                    </div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2 text-xl'>
                        <div>
                            <h1  className='font-bold text-lg'>Increases Profitabilty</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div>
                            <AiOutlineRise height={100} className='mt-4'/>
                        </div>
                    </div>
                    <div className='flex flex-row shadow-lg w-[400px] m-1 justify-between p-2'>
                        <div>
                            <h1  className='font-bold text-lg'>Created Peace of Mind</h1>
                            <p>Lorem Ipsum</p>
                        </div>
                        <AiOutlineRise height={100} className='mt-4'/>
                    </div>
                    
                </div>
                <img src="https://www.zonoapp.com/img/collection-mackbook.svg"  alt="ss" className='w-[200px] h[130px]'/>
            </div>
        </div>
        
    </div>
  )
}
