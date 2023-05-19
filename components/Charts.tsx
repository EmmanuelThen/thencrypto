import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';;
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,

} from 'chart.js';
import Sidebar from './Sidebar';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,

);


type Props = {
    coinUuid: string,
    lineColor: string,
    coinName: string,
    coinPrice: string,
    coinCap: string,
    coinVolume: string,
    coinRank: string,
}

const Charts = ({ coinUuid, lineColor, coinName, coinPrice, coinCap, coinVolume, coinRank }: Props) => {

    const [coinHistory, setCoinHistory] = useState([]);
    const [coinChange, setCoinChange] = useState([]);
    const [timeStamp, setTimeStamp] = useState('24h');

    const handleChange = (event: SelectChangeEvent) => {
        setTimeStamp(event.target.value);
    };



    useEffect(() => {
        const getCoinHistory = async () => {

            const url = `https://coinranking1.p.rapidapi.com/coin/${coinUuid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timeStamp}`;
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
                setCoinHistory(result.data.history);
                setCoinChange(result.data.change)
            } catch (error) {
                console.error(error);
            }
        }
        getCoinHistory();
    }, [coinUuid, timeStamp]);


    {/** Data for our line chart */ }
    const data = {
        labels: coinHistory.map((item: any) => new Date(item.timestamp * 1000).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        })).reverse(),
        datasets: [
            {
                label: 'Price',
                data: coinHistory.map((item: any) => item.price).reverse(),
                borderColor: lineColor,
                backgroundColor: lineColor,
                borderWidth: 2,
                fill: {
                    target: 'origin',
                    above: 'rgb(255, 0, 0)',   // Area will be red above the origin
                    below: 'rgb(0, 0, 255)'    // And blue below the origin
                }
            }
        ]
    }

    {/** Options for our line chart */ }
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `${coinName} ${timeStamp} Chart`,
            },
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day',
                    displayFormats: {
                        day: 'MMM D',
                        hour: timeStamp === '24h' ? 'hA' : 'MMM D',
                    },
                    tooltipFormat: "MMM D, YYYY, hA",
                },
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: (value: number, index: number, values: number) => {
                        return '$' + value;
                    },
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                }
            }],
        },
    };

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

            <div className='hero_wrapper'>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='text-md md:text-4xl font-bold' style={{ color: lineColor }}>
                            {coinPrice}
                        </span>

                        <div className='flex justify-between text-sm md:text-base'>
                            <p className='text-gray-400'>Change:</p>
                            <span className={coinChange >= 0 ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'}>
                                {coinChange >= 0 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                {`${coinChange}%`}
                            </span>
                        </div>
                    </div>
                    <ThemeProvider theme={theme}>
                        <FormControl sx={{ minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label" style={{ color: lineColor }}>Timeframe</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={timeStamp}
                                label="Timestamp"
                                onChange={handleChange}
                            >
                                <MenuItem value='24h'>24 Hours</MenuItem>
                                <MenuItem value='7d'>7 Days</MenuItem>
                                <MenuItem value='30d'>30 Days</MenuItem>
                                <MenuItem value='3m'>3 Months</MenuItem>
                                <MenuItem value='1y'>1 Year</MenuItem>
                                <MenuItem value='3y'>3 Years</MenuItem>
                                <MenuItem value='5y'>5 Years</MenuItem>
                            </Select>
                        </FormControl>
                    </ThemeProvider>
                </div>
                <Line options={options} data={data} />
            </div>

            <div className='hero_wrapper flex flex-col gap-2 items-center w-full mt-5 p-2 text-sm md:text-base' id='stats'>
                <h1 className=' capitalize font-semibold'>{coinName} market stats</h1>
                <div className="flex justify-between w-full px-5">
                    <div>
                        <AttachMoneyIcon className='theme_color' /> <span>Current price</span>
                    </div>
                    <div>
                        {numberFormatter(`${coinPrice}`)}
                    </div>
                </div>

                <div className="flex justify-between w-full px-5">
                    <div>
                        <TrendingUpIcon className='theme_color' /> <span>Market cap</span>
                    </div>
                    <div>
                        <span>$</span>{numberFormatter(`${coinCap}`)}
                    </div>
                </div>

                <div className="flex justify-between w-full px-5">
                    <div>
                        <EqualizerIcon className='theme_color' /> <span>Volume</span>
                    </div>
                    <div>
                        <span>$</span>{numberFormatter(`${coinVolume}`)}
                    </div>
                </div>

                <div className="flex justify-between w-full px-5">
                    <div>
                        <AutoAwesomeIcon className='theme_color' /> <span>Popularity</span>
                    </div>
                    <div>
                        <span>#</span>{coinRank}
                    </div>
                </div>


            </div>




        </>

    )
}

export default Charts