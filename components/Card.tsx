'use client'
import { useEffect, useState } from "react"
import React from 'react'
import Image from "next/image"
import { DateRange } from "@mui/icons-material"
import { Fab, Box } from "@mui/material"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Popper, PopperPlacementType, Fade, Paper, Popover, Typography } from "@mui/material"


type Props = {}

const Card = (props: Props) => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        const getCoinPrice = async () => {

            const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=15&offset=0'
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


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
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
            
            <div className="hero_wrapper md:flex justify-center p-20 md:p-5 flex-wrap md:w-[75%] bg-[#347fc4]">
                {coins.map((coin) => (
                    <div key={coin.uuid} className="cards  m-5 rounded-lg leading-8 bg-[#fff] min-w-max h-fit">
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-3">
                                <Image src={coin.iconUrl} alt="coin logo" width={40} height={40} />
                                <div className="flex flex-col justify-center items-center">
                                    <h4 style={{ color: coin.color }}>{coin.symbol}</h4>
                                    <span className="text-sm text-gray-400">{coin.name}</span>
                                    <div className="h-[1px] bg-gray-300 w-full" />
                                </div>
                                <div className="">
                                    <Fab size="small" style={{ color: coin.color }} aria-label="add" onClick={handleClick}>
                                        <FormatListBulletedIcon />
                                    </Fab>
                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <Typography sx={{ p: 2 }}>Coin details</Typography>
                                    </Popover>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="mr-10">Price:</h4>
                                <h4>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(coin.price)}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="mr-10">Market Cap:</h4>
                                <h4><span>$</span>{numberFormatter(`${coin.marketCap}`)}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="mr-10">Change:</h4>
                                <h4 id="change" >{`${coin.change}%`}</h4>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="mr-10">Coin Ranking:</h4>
                                <h4>{numberFormatter(coin.rank)}</h4>
                            </div>
                        </div>
                    </div>

                ))}

            </div >

        </>
    )
}

export default Card