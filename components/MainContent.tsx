'use client'
import React from 'react';
import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    MotionValue
} from "framer-motion";

const description = [
    'Display interactive price charts that show the historical price movements of cryptocurrencies over different timeframes. With our charts you can hover over data points to view detailed price information.',
    'We provide users with a visually engaging and informative way to track and analyze cryptocurrency data. Our charts are designed to empower you with the tools needed to make informed trading decisions and understand the market dynamics.',
    'Educational resources such as articles and videos for beginners and advanced users. Stay up to date with the latest news and gain valuable insights into the ever-evolving world of cryptocurrencies.'
]
const feature = ['Real Time Market Data', 'Interactive Charts', 'News & Insight']

{/** To render each feature next to the description */ }
const featuresWithId = feature.map((item, i) => ({
    id: i + 1,
    name: item,
}));

const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance])
}

{/** Description component */ }
const Description = ({ features, descriptions }: any) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <>
            <motion.div>
                <section className='flex relative justify-center items-center perspective-500 h-[50vh] md:h-screen md:snap-y md:snap-mandatory md:snap-center' id='motion_section'>
                    <div className='cards rounded-[7px] bg-[#ebf5ee] absolute top-0 left-0 right-0 bottom-0 w-[300px] h-[300px] md:w-[500px] md:h-[400px] p-5 md:m-[20px]' ref={ref} id='motion_div'>
                        <h1 className='flex justify-center text-xl mb-5 md:hidden text_gradient'>{features}</h1>
                        <p className='font-bold md:text-xl text-gray-500'>{descriptions}</p>
                    </div>
                    <motion.h2 className='hidden md:block text_gradient text-2xl tracking-tight md:tracking-[-3px] md:text-4xl lg:text-[56px] left-calc-50' style={{ y }} id='features'>
                        <p>{features}</p>
                    </motion.h2>
                </section>
            </motion.div>
        </>
    );
}


{/** Main component */ }
const MainContent = ({ }) => {
    return (
        <>
            {description.map((item, i) => (
                <Description descriptions={item} key={i} features={featuresWithId[i].name} />
            ))}
        </>
    )
}

export default MainContent;