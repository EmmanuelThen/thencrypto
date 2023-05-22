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

    const handleFeaturesClick = () => {
        const featureSections = ['market_data', 'watchlist', 'news']

        featureSections.forEach((id, i) => {
            const feature = document.getElementById(id)
            const section = document.getElementById('motion_section')

            feature?.addEventListener('click', () => {
                section?.scrollIntoView({ behavior: 'smooth'})
            })
        }) 
    }


    return (
        <>
            <article className=' md:flex flex-col md:p-2 lg:p-0  '>
                <div className='flex justify-center items-center h-[100px]'>
                    <div className='flex items-center'>
                        <span className='text_gradient text-[#347fc4] text-[60px] py-6'>[</span>
                        <h1 className='text-white text-3xl md:text-[42px] mx-5' id='text_shadow'>Features</h1>
                        <span className='text_gradient text-[#347fc4] text-[60px] py-6'>]</span>
                    </div>
                </div>

                <div id='1' className='flex justify-around my-20 lg:my-[80px]'>
                    <div 
                    className='hero_wrapper w-fit p-4 shadow-md bg-[#347fc4] cursor-pointer hover:scale-125 hover:transition-all ease-in-out'
                    onClick={handleFeaturesClick}
                    >
                        <div id='market_data'>
                            <TrendingUpIcon className='text-white' />
                            <div className='h-1 w-full bg_gradient'/>
                        </div>
                    </div>
                    
                    <div 
                    className='hero_wrapper w-fit p-4 shadow-md bg-[#347fc4] cursor-pointer hover:scale-125 hover:transition-all ease-in-out'
                    onClick={handleFeaturesClick}
                    >
                        <div id='watchlist'>
                            <FormatListNumberedIcon className='text-white' />
                            <div className='h-1 w-full bg_gradient'/>
                        </div>
                    </div>
                    <div 
                    className='hero_wrapper w-fit p-4 shadow-md bg-[#347fc4] cursor-pointer hover:scale-125 hover:transition-all ease-in-out'
                    onClick={handleFeaturesClick}
                    >
                        <div id='news'>
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