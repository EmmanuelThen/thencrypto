'use client'
import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

type Props = {}

const Features = (props: Props) => {
    return (
        <>
            {/** Mobile view */}
            <article className='md:hidden text-xs flex flex-col justify-center items-center gap-5 p-5'>
                <div className='flex justify-center items-center h-[100px]'>
                    <div className='flex items-center'>
                        <span className='text_gradient text-[#347fc4] text-[60px] py-6'>[</span>
                        <h1 className='text-white text-4xl mx-5' id='text_shadow'>Features</h1>
                        <span className='text_gradient text-[#347fc4] text-[60px] py-6'>]</span>
                    </div>
                </div>
                <div className='hero_wrapper flex p-5 shadow-xl'>
                    <TrendingUpIcon className=' mr-2 text-[#ebf5ee]' />
                    <div>
                        <h1 className='capitalize font-semibold text-[#ebf5ee]'>real time market data</h1>
                        <p className=''>
                            Up-to-date information on prices, trading volume,
                            market capitalization, and other relevant data for various cryptocurrencies.
                        </p>
                    </div>
                </div>
                <div className='hero_wrapper flex p-5 shadow-xl'>
                    <NewspaperIcon className=' mr-2 text-[#ebf5ee]' />
                    <div>
                        <h1 className='capitalize font-semibold text-[#ebf5ee]'>news and insights</h1>
                        <p className=''>
                            News section where users can access the latest articles,
                            analysis and updates in the cryptocurrency market
                            dsbhfbdhfbsdhjfbdjhfbsjdhfbhdsjfbsdjfbjsdfbshjdfb
                        </p>
                    </div>
                </div>
                <div className='hero_wrapper flex p-5 shadow-xl'>
                    <QueryStatsIcon className=' mr-2 text-[#ebf5ee]' />
                    <div>
                        <h1 className='capitalize font-semibold text-[#ebf5ee]'>interactive charts</h1>
                        <p className=''>
                            Price charts that show the historical price movements of cryptocurrencies over different timeframes .
                            Users can hover over data points to view detailed price information.
                        </p>
                    </div>
                </div>

            </article>




            {/** Tablet and up */}
            <article className='hidden md:flex flex-col md:p-2 lg:p-0  '>
                <div className='flex justify-center items-center h-[100px]'>
                    <div className='flex items-center'>
                        <span className='text_gradient text-[#347fc4] text-[60px] py-6'>[</span>
                        <h1 className='text-white text-[42px] mx-5' id='text_shadow'>Features</h1>
                        <span className='text_gradient text-[#347fc4] text-[60px] py-6'>]</span>
                    </div>
                </div>

                <div id='1' className='flex justify-around my-20 lg:my-[80px]'>
                    <div className='hero_wrapper w-fit p-4 shadow-md bg-[#347fc4] cursor-pointer hover:scale-125 hover:transition-all ease-in-out'>
                        <div>
                            <TrendingUpIcon className='text-white' />
                            <div className='h-1 w-full bg_gradient'/>
                        </div>
                    </div>
                    <div className='hero_wrapper w-fit p-4 shadow-md bg-[#347fc4] cursor-pointer hover:scale-125 hover:transition-all ease-in-out'>
                        <div>
                            <FormatListNumberedIcon className='text-white' />
                            <div className='h-1 w-full bg_gradient'/>
                        </div>
                    </div>
                    <div className='hero_wrapper w-fit p-4 shadow-md bg-[#347fc4] cursor-pointer hover:scale-125 hover:transition-all ease-in-out'>
                        <div>
                            <NewspaperIcon className='text-white' />
                            <div className='h-1 w-full bg_gradient'/>
                        </div>
                    </div>
                </div>

                


            </article>
        </>
    )
}

export default Features