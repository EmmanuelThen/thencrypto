'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Autocomplete, TextField } from '@mui/material';
import theme from '@/theme';
import PriceChange from './PriceChange';

type Props = {}


const Hero = (props: Props) => {

  return (

    <div className='flex justify-around' id='grid'>
      <div className=' flex flex-col p-5 gap-2'>
        <div className='text-[40px] md:text-[70px]'>
          <div className='flex ml-8 items-center '>
            <span className='font-semibold text-white' id='text_shadow'>Enhance</span>
            <div className='flex justify-center items-center leading-tight max-w-[80px]'>
              <span className='text_gradient text-[#347fc4] text-[60px]'>[</span>
              <span className='text-[7px] text-gray-300'>The industry leading crypto platform</span>
            </div>
          </div>
        </div>
        <div className='flex ml-[3.6rem]' id='text_shadow'>
          <div className='text-[40px] md:text-[70px] font-semibold text-white'>Your <span className='text_gradient'>Crypto</span></div>
        </div>
        <div className='text-[40px] md:text-[70px]'>
          <div className='flex ml-8 items-center '>
            <div className='flex justify-center items-center leading-tight max-w-[80px] text-end'>
              <span className='text-[8px] text-gray-300'>Everything crypto, all in one place</span>
              <span className='text_gradient text-[#347fc4] text-[60px]'>]</span>
            </div>
            <span className='font-semibold text-white' id='text_shadow'>Experience </span>
          </div>
        </div>
      </div>
      <PriceChange />



    </div >
  )
}

export default Hero