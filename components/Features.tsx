'use client'
import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

type Props = {}

const Features = (props: Props) => {
  return (
    <>
        {/** Mobile and tablet view */}
        <article className='text-xs flex flex-col justify-center items-center gap-5 p-5'>
            <div className='flex justify-center items-center h-[100px]'>
                <div className='flex items-center'>
                    <span className='text_gradient text-[#347fc4] text-[60px] py-6'>[</span>
                    <h1 className='text-white text-4xl mx-5' id='text_shadow'>Features</h1>
                    <span className='text_gradient text-[#347fc4] text-[60px] py-6'>]</span>
                </div>
            </div>
            <div className='hero_wrapper flex p-5 shadow-xl'>
                <TrendingUpIcon className=' mr-2 text-[#ebf5ee]'/>
                <div>
                    <h1 className='capitalize font-semibold text-[#ebf5ee]'>real time market data</h1>
                    <p className=''>
                        Up-to-date information on prices, trading volume,
                        market capitalization, and other relevant data for various cryptocurrencies.
                    </p>
                </div>
            </div>
            <div className='hero_wrapper flex p-5 shadow-xl'>
                <NewspaperIcon className=' mr-2 text-[#ebf5ee]'/>
                <div>
                    <h1 className='capitalize font-semibold text-[#ebf5ee]'>news and insights</h1>
                    <p className=''>
                        News section where users can access the latest articles,
                        analysis and updates in the cryptocurrency market
                    </p>
                </div>
            </div>
            <div className='hero_wrapper flex p-5 shadow-xl'>
                <QueryStatsIcon className=' mr-2 text-[#ebf5ee]'/>
                <div>
                    <h1 className='capitalize font-semibold text-[#ebf5ee]'>interactive charts</h1>
                    <p className=''>
                        Price charts that show the historical price movements of cryptocurrencies over different timeframes .
                        Users can hover over data points to view detailed price information.
                    </p>
                </div>
            </div>
        
        </article>
    </>
  )
}

export default Features