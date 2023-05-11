'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Autocomplete, TextField } from '@mui/material';
import theme from '@/theme';

type Props = {}


const Hero = (props: Props) => {
  const [searchCoin, setSearchCoin] = useState('');
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getCoins = async () => {

      if (searchCoin) {
        const url = `https://coinranking1.p.rapidapi.com/search-suggestions?query=${searchCoin}&referenceCurrencyUuid=yhjMzLPhuIDl`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_COIN_SEARCH_API_KEY,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
          }
        };

        try {
          const response = await fetch(url, options);
          const result = await response.text();
          setCoins(JSON.parse(result).data.coins);
        } catch (error) {
          console.error(error);
        }
      }
    }

    getCoins();
  }, [searchCoin]);

  const handleSearchInputChange = (e) => {
    setSearchCoin(e.target.value);
  }


  return (

    <div className='hero_wrapper flex flex-col p-5 md:px-20 lg:px-[200px] gap-2 shadow-lg  '>

      <div className='text-[40px] md:text-[80px]'>
        <div className='flex ml-8 items-center '>
          <span className='font-semibold'>Enhance</span>
          <div className='flex justify-center items-center leading-tight max-w-[80px]'>
            <span className='text_gradient text-[#347fc4] text-[60px]'>[</span>
            <span className='text-[7px] text-gray-400'>The industry leading crypto platform</span>
          </div>
        </div>
      </div>

      <div className='flex ml-[3.6rem]'>
        <div className='text-[40px] md:text-[80px] font-semibold'>Your <span className='text_gradient'>Crypto</span></div>
      </div>

      <div className='text-[40px] md:text-[80px]'>
        <div className='flex ml-8 items-center '>
          <div className='flex justify-center items-center leading-tight max-w-[80px] text-end'>
            <span className='text-[8px] text-gray-400'>Everything crypto, all in one place</span>
            <span className='text_gradient text-[#347fc4] text-[60px]'>]</span>
          </div>
          <span className='font-semibold'>Experience </span>
        </div>
      </div>

      <div className='flex justify-center mt-10'>
        <div className='w-[50%] mx-10 '>
          <ThemeProvider theme={theme}>
            <Autocomplete
              value={searchCoin}
              disableClearable
              options={coins.map((coins) => coins.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Coins"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                  onChange={handleSearchInputChange}
                  className='shadow-lg'
                />
              )}
            />
          </ThemeProvider>
        </div>
      </div>

    </div >
  )
}

export default Hero