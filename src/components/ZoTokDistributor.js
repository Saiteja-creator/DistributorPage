import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';


export const ZoTokDistributor = () => {
  return (
    <div>
        <Card className='p-2 italic h-[220px] bg-blue-200'>
            <CardBody>
                <div className='flex flex-row  justify-between p-2'>
                    <div  className='gap-4 flex flex-col justify-between'>
                        <h1 className='font-bold text-2xl'>Zotok is my Single Integrated chat Platform with ...</h1>
                        <ul>
                            <li className='flex item-center'>
                                <MdKeyboardArrowRight className='mt-1' />
                                <p>Stremlined Orders</p>
                            </li>
                            <li className='flex item-center'>
                                <MdKeyboardArrowRight  className='mt-1'/>
                                <p>Timely Payment</p>
                            </li>
                            <li className='flex item-center'>
                                <MdKeyboardArrowRight className='mt-1' />
                                <p>Dynamic Marketing Campaigns</p>
                            </li>
                        </ul>
                        
                        <p>Leading to <span>Higher Turnover</span> with Better <span>Peace of Mind</span></p>
                        
                    </div>
                    <Image src="https://www.zonoapp.com/img/credit-zono-home.png" alt="zonoImage"  width={200} height={100} className='h-full mr-2' />
                    
                </div>
            </CardBody>
        </Card>
    </div>
  )
}
