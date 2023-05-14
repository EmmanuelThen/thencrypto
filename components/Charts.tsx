import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';;
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
}

const Charts = ({ coinUuid, lineColor, coinName, coinPrice }: Props) => {

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
        labels: coinHistory.map((item) => new Date(item.timestamp * 1000).toLocaleDateString('en-US', {
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
            }
        ]
    }

    {/** Options for our line chart */ }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
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
                    tooltipFormat: "MMM D, YYYY h:mm A",
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }],
        },
    };









    return (

        <>

            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='flex justify-between text-4xl font-bold'>
                        <span style={{ color: lineColor }}>
                            {coinPrice}
                        </span>
                    </h2>
                    <div>
                        <div className=''>

                            <div className='flex justify-between'>
                                <p className='text-gray-400'>Change:</p>
                                <span className={coinChange >= 0 ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'}>
                                    {coinChange >= 0 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                    {`${coinChange}%`}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Timeframe</InputLabel>
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
            </div>

            <Line options={options} data={data} />

            <div>
                <h1>About</h1>
            </div>


        </>

    )
}

export default Charts