"use client"

import React from 'react'

import DistributorTab from '@/components/DistributorTab';
import { DistributorText } from '@/components/DistributorText';

const  distributors = () => {
  return (
    <div>
      <DistributorTab/>
      <DistributorText/>
    </div>
  )
}

export default distributors