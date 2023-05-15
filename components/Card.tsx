'use client'
import { useEffect, useState } from "react"
import React from 'react'
import Image from "next/image"
import { Fab, Box } from "@mui/material"
import { Popover } from "@mui/material"
import Sidebar from "./Sidebar"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CloseIcon from '@mui/icons-material/Close';
import { Line } from "react-chartjs-2"
import Charts from "./Charts";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';;
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




type Props = {}

const Card = (props: Props) => {
    const [coins, setCoins] = useState([]);
    const [selectedCoin, setselectedCoin] = useState(null)


    // const [count, setCount] = useState(number) for when user clicks on button it displays more coins url needs `limit=${count}`

    useEffect(() => {
        const getCoinPrice = async () => {

            const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0'
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_COIN_SEARCH_API_KEY,
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setCoins(result.data.coins)

            } catch (error) {
                console.error(error);
            }
        }
        getCoinPrice();
    }, [])

    {/** For popover button on each card */ }
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, coin: any) => {
        setAnchorEl(event.currentTarget);
        setselectedCoin(coin) // To open graph for specific coin cards

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



    {/** To format trillions, billions, and millions */ }
    const numberFormatter = (num) => {
        if (num >= 1000000000000) {
            return (num / 1000000000000).toFixed(1) + 'T';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B';
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        return num;

    }



    return (
        <>
            <div className="md:flex md:justify-center">
                
                <div className="hero_wrapper h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  lg:p-0 md:w-full bg-[#347fc4] ">

                    {coins.map((coin) => (

                        <div key={coin.uuid} className="cards  p-1 md:p-0 m-1 rounded-lg md:leading-8 lg:leading-9 bg-[#fff] text-xs md:text-sm lg:text-base">
                            <div className="p-1 md:p-3">

                                <div className="flex justify-between items-center mb-3">
                                    <Image src={coin.iconUrl} alt="coin logo" width={40} height={40} />
                                    <div className="flex flex-col justify-center items-center">
                                        <h4 style={{ color: coin.color }}>{coin.symbol}</h4>
                                        <span className=" text-gray-400">{coin.name}</span>
                                        <div className="h-[1px] bg-gray-300 w-full" />
                                    </div>
                                    <div className="">
                                        <Fab id={id} size="small" style={{ color: coin.color }} aria-label="add" onClick={(event) => handleClick(event, coin)}>
                                            <TrendingUpIcon />
                                        </Fab>
                                        <Popover
                                            id={id}
                                            open={open && coin.uuid === selectedCoin?.uuid}
                                            anchorEl={anchorEl}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            className="popover_container"
                                        >
                                            <div className="w-screen h-screen">
                                                <div className="popover_wrapper md:p-10">
                                                    <div className="flex justify-between w-[358px] md:w-full p-2" id="top-title-div">
                                                        <Image src={coin.iconUrl} alt="coin logo" width={30} height={30} />
                                                        <div className="flex flex-col items-center">
                                                            <h1 style={{ color: coin.color }}>{coin.symbol}</h1>
                                                            <h1 className="text-gray-400">{coin.name}</h1>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <CloseIcon />
                                                        </div>
                                                    </div>

                                                    <div className=" h-screen w-[358px] md:w-full md:p-20" id="chart_container">
                                                        <Charts
                                                            coinUuid={coin.uuid}
                                                            lineColor={coin.color}
                                                            coinName={coin.name}
                                                            coinPrice={Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(coin.price)}
                                                            coinCap={coin.marketCap}
                                                            coinVolume={numberFormatter(coin['24hVolume'])}
                                                            coinRank={coin.rank}
                                                        />
                                                        <Sidebar coinName={coin.name} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center mb-3 md:mb-8">
                                        <span className='text-xl md:text-4xl font-bold' style={{ color: coin.color }}>
                                            {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(coin.price)}
                                        </span>
                                    </div>

                                    <div className='flex justify-between text-sm md:text-base'>
                                        <p className='text-gray-400'>Change:</p>
                                        <span className={coin.change >= 0 ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'}>
                                            {coin.change >= 0 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                            {`${coin.change}%`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div >
            </div>


        </>
    )
}

export default Card