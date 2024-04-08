import React from 'react'
import { Ordering } from './Ordering'
import { Collections } from './Collections'
import { Reconcilliation } from './Reconcilliation'
import { Marketing } from './Marketing'
import { ZoTokDistributor } from './ZoTokDistributor'

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { ZotokDescription } from './ZotokDescription'

export const DistributorText = () => {
  return (
    <div className='ml-[170px]  w-[1080px] italic'>
        <ZoTokDistributor/>
        <Card className='bg-white'>
            <CardBody >
                <ZotokDescription/>
                <Ordering/>
                <Collections/>
                <Reconcilliation/>
                <Marketing/>
                
            </CardBody>
        </Card>
    </div>
  )
}
