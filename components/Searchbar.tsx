'use client'
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Autocomplete, TextField } from '@mui/material';
import theme from '@/theme';


const Searchbar = ({filteredCoins, setFilteredCoins, handleSearchInputChange}) => {
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
          const filtered = JSON.parse(result).data.coins;
          setFilteredCoins(filtered);
        } catch (error) {
          console.error(error);
        }
      }
    }

    getCoins();
  }, [searchCoin, setFilteredCoins]);

  

  
  


  return (
    <div>
      <div className='flex justify-center mt-10'>
        <div className='w-[50%] mx-10'>
          <ThemeProvider theme={theme}>
            <Autocomplete
              value={searchCoin}
              disableClearable
              options={coins.map((coin) => coin.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Coins"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                  onChange={handleSearchInputChange}
                  className='shadow-lg bg-white'
                />
              )}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  )
}

export default Searchbar