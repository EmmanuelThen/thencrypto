'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Autocomplete, TextField } from '@mui/material';
import theme from '@/theme';

type Props = {}


const Hero = (props: Props) => {
  
  return (

    <div className='bg-[#347fc4] flex flex-col p-5 md:px-20 lg:px-[200px] gap-2 shadow-lg'>

      <div className='text-[40px] md:text-[80px]'>
        <div className='flex ml-8 items-center '>
          <span className='font-semibold text-white' id='text_shadow'>Enhance</span>
          <div className='flex justify-center items-center leading-tight max-w-[80px]'>
            <span className='text_gradient text-[#347fc4] text-[60px]'>[</span>
            <span className='text-[7px] text-gray-300'>The industry leading crypto platform</span>
          </div>
        </div>
      </div>

      <div className='flex ml-[3.6rem]' id='text_shadow'>
        <div className='text-[40px] md:text-[80px] font-semibold text-white'>Your <span className='text_gradient'>Crypto</span></div>
      </div>

      <div className='text-[40px] md:text-[80px]'>
        <div className='flex ml-8 items-center '>
          <div className='flex justify-center items-center leading-tight max-w-[80px] text-end'>
            <span className='text-[8px] text-gray-300'>Everything crypto, all in one place</span>
            <span className='text_gradient text-[#347fc4] text-[60px]'>]</span>
          </div>
          <span className='font-semibold text-white' id='text_shadow'>Experience </span>
        </div>
      </div>

      

    </div >
  )
}

export default Hero