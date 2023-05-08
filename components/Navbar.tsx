'use client'
import React, { useState, useEffect } from 'react'
import MenuBookIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/thencrypto-logo.png'
import { Autocomplete, TextField, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from '../theme';




type Props = {

}

//call api to get all coins to put into this object so when user searches they populate
//const apiKey = process.env.NEXT_PUBLIC_COIN_SEARCH_API_KEY;

const Navbar = ({ }: Props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const getCoins = async () => {
            
            if (searchTerm) {
                const url = `https://coinranking1.p.rapidapi.com/search-suggestions?query=${searchTerm}&referenceCurrencyUuid=yhjMzLPhuIDl`;
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
    }, [searchTerm]);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (

        <>

            <div className='p-4'>
                <div className='flex justify-between md:hidden'>
                    <div id='top-logo'>
                        <Image src={logo} alt='ThenCrypto-logo' width={40} id='top-image'  />
                    </div>
                    <div className='flex flex-col justify-center hover:text-[#347fc4] cursor-pointer'>
                        <MenuBookIcon />
                    </div>
                </div>

                <div className='hidden md:flex justify-between items-center'>
                    <Image src={logo} alt='ThenCrypto-logo' width={40} id='top-image' />
                    <ThemeProvider theme={theme}>
                        <div className='w-[50%] mx-10' >
                            <Autocomplete
                                value={searchTerm}
                                id="search-bar"
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
                                    />
                                )}

                            />
                        </div>
                    </ThemeProvider>

                    <div className='flex gap-10 mr-8'>
                        <Link href='/' className='hover:text-[#347fc4]'>Home</Link>
                        <Link href='/' className='hover:text-[#347fc4]'>Cryptocurrencies</Link>
                        <Link href='/' className='hover:text-[#347fc4]'>Exchanges</Link>
                        <Link href='/' className='hover:text-[#347fc4]'>News</Link>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Navbar