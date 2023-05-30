'use client'
import { useEffect, useState } from "react"
import React from 'react'
import Image from "next/image"
import { Fab } from "@mui/material"
import { Popover } from "@mui/material"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CloseIcon from '@mui/icons-material/Close';
import Charts from "./Charts";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';;
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { getCoinData } from '../api/coinRanking.js';
import Searchbar from "./Searchbar"
import News from './News';


type Props = {
    amountOfCoins: number,
    display: string,
    mdColsNum: string,
    lgColsNum: string,
}

interface Coin {
    uuid: string;
    name: string;
    symbol: string;
    iconUrl: string;
    color: string;
    price: number;
    change: number;
    rank: number;
    marketCap: string;
    ['24hVolume']: number;
  }

const Card = ({ amountOfCoins, display, mdColsNum, lgColsNum }: Props) => {
        const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);
        const [selectedCoin, setselectedCoin] = useState<Coin | null>(null);
        const [originalCoins, setOriginalCoins] = useState<Coin[]>([]);
    
    useEffect(() => {
        const fetchCoinData = async () => {
            const coinData = await getCoinData(amountOfCoins);
            setFilteredCoins(coinData);
            setOriginalCoins(coinData);
        };
        fetchCoinData();
    }, [amountOfCoins]);

    {/* To narrow down coins while searching in Searchbar*/}
    const handleSearchInputChange = (e: any) => {
        const query = e.target.value;
        const filtered = originalCoins.filter((coin: Coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredCoins(filtered);
    };

    {/** For popover button on each card */ }
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, coin: any) => {
        setAnchorEl(event.currentTarget);
        setselectedCoin(coin) // To open graph for specific coin on card
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    {/** To format trillions, billions, and millions */ }
    const numberFormatter = (num: any) => {
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
            <div className={`${display} mb-10`}>
                <Searchbar
                    filteredCoins={filteredCoins}
                    setFilteredCoins={setFilteredCoins}
                    handleSearchInputChange={handleSearchInputChange}
                />
            </div>
            <div className="md:flex md:justify-center md:p-3">
                <div className={`h-full grid grid-cols-2 ${mdColsNum} ${lgColsNum} lg:p-0 md:w-full`}>
                    {filteredCoins.map((coin: Coin) => (
                        <div 
                            key={coin.uuid} 
                            className="hover:scale-105 hover:transition-all hover:duration-125 ease-in-out cards h-fit p-1 md:p-0 m-2 rounded-[7px] md:leading-8 lg:leading-9 bg-[#ebf5ee] text-xs lg:text-sm"
                        >
                            <div className="p-1 md:p-3">
                                <div className="flex justify-between items-center mb-3">
                                    <Image src={coin.iconUrl} alt="coin logo" width={30} height={30} />
                                    <div className="flex flex-col justify-center items-center">
                                        <h4 style={{ color: coin.color }}>{coin.symbol}</h4>
                                        <span className="text-gray-400 truncate" style={{ maxWidth: 80 }}>{coin.name}</span>
                                        <div className="h-[1px] bg-gray-300 w-full" />
                                    </div>
                                    <div className="">
                                        <Fab className="z-0" id={id} size="small" style={{ color: coin.color}} aria-label="add" onClick={(event) => handleClick(event, coin)}>
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
                                            <div>
                                                <div className="pr-8 w-screen">
                                                    <div className="flex justify-between w-full p-2 mt-3" id="top-title-div">
                                                        <Image src={coin.iconUrl} alt="coin-logo" width={30} height={30} />
                                                        <div className="flex flex-col items-center">
                                                            <h1 style={{ color: coin.color }}>{coin.symbol}</h1>
                                                            <h1 className="text-gray-400">{coin.name}</h1>
                                                        </div>
                                                        <button className="flex items-center cursor-pointer hover:text-[#347fc4]" type="button" onClick={handleClose}>
                                                            <CloseIcon />
                                                        </button>
                                                    </div>
                                                    <div className="h-screen sm:p-20 md:w-full" id="chart_container">
                                                        <Charts
                                                            coinUuid={coin.uuid}
                                                            lineColor={coin.color}
                                                            coinName={coin.name}
                                                            coinPrice={Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(coin.price)}
                                                            coinCap={coin.marketCap}
                                                            coinVolume={numberFormatter(coin['24hVolume'])}
                                                            coinRank={coin.rank}
                                                        />
                                                        <News coinName={coin.name} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center mb-3 md:mb-8">
                                        <span className='text-xl md:text-2xl font-bold' style={{ color: coin.color }}>
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