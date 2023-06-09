'use client'
import React from 'react'
import Bitcoin from './BitcoinSvg';

const Hero = () => {
  return (
    <div className='flex justify-around md:pt-10'>
      <div className=' flex flex-col p-5 pl-0 pr-0 gap-2'>
        <div className='text-[35px] md:text-[70px]'>
          <div className='flex ml-8 items-center '>
            <span className='font-semibold text-white' id='text_shadow'>Enhance</span>
            <div className='flex justify-center items-center leading-tight max-w-[80px]'>
              <span className='text_gradient text-[#347fc4] text-[60px]'>[</span>
              <span className='text-[7px] text-gray-400'>The industry leading crypto platform</span>
            </div>
          </div>
        </div>
        <div className='flex ml-[3.6rem]' id='text_shadow'>
          <div className='text-[35px] md:text-[70px] font-semibold text-white'>Your <span className='text_gradient'>Crypto</span></div>
        </div>
        <div className='text-[35px] md:text-[70px]'>
          <div className='flex ml-8 items-center '>
            <div className='flex justify-center items-center leading-tight max-w-[80px] text-end'>
              <span className='text-[7px] text-gray-400'>Everything crypto, all in one place</span>
              <span className='text_gradient text-[#347fc4] text-[60px]'>]</span>
            </div>
            <span className='font-semibold text-white' id='text_shadow'>Experience </span>
          </div>
        </div>
      </div>
      <Bitcoin />
    </div >
  )
}

export default Hero