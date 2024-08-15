"use client"

import { UserProfile } from '@clerk/nextjs'
import React from 'react'
import useMetaPixel from '@/lib/useMetaPixel'

function Settings() {
  useMetaPixel('1704090783704429');
  return (
    <div className='flex items-center justify-center h-full'>
        <UserProfile/>
    </div>
  )
}

export default Settings