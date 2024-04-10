import React from 'react'

import { ZoTokDistributor } from './ZoTokDistributor'

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

import { StaticTabDescription } from '../../utils/distribtutorTabData'
import { ZotokTabDescription } from './ZotokTabDescription'

export const DistributorText = () => {
  return (
    <div className='ml-[170px]  w-[1080px] italic'>
        <ZoTokDistributor/>
        <Card className='bg-white'>
            <CardBody >
                {StaticTabDescription.map((eachTabDes)=>(
                  <ZotokTabDescription TabDeatils={eachTabDes} key={eachTabDes.Heading}/>
                ))}
                
            </CardBody>
        </Card>
    </div>
  )
}
