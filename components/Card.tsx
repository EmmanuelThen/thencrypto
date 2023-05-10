'use client'
import { useEffect, useState } from "react"
import React from 'react'
import Image from "next/image"
import { DateRange } from "@mui/icons-material"

type Props = {}

const Card = (props: Props) => {
    const [coins, setCoins] = useState([])
    const [change, setChange] = useState('')


    useEffect(() => {
        const getCoinPrice = async () => {

            const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0'
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



    {/** To format trillions, billions, and millions */}
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

    {/** To format time */}
    const timeFormatter = (num) => {
        const date = new Date(num * 1000)
        const formattedDate = date.toLocaleString()
        return formattedDate;
    }


    return (
        <>
            
            <div className="md:grid md:grid-cols-5 p-20 gap-20">
                {coins.map((coin) => (
                
                        <div key={coin.uuid} className="cards p-5 rounded-lg leading-8 bg-[#fff] min-w-max">
                            <div className="p-5">
                                <Image src={coin.iconUrl} alt="coin logo" width={20} height={20} />
                                <div className="flex flex-col justify-center items-center">
                                    <h4 style={{color: coin.color}}>{coin.symbol}</h4>
                                    <span className="text-sm text-gray-400">{coin.name}</span>
                                    <div className="h-[1px] bg-gray-300 w-full" />
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
            </div>
        
        </>
    )
}

export default Card