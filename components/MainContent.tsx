'use client'
import React from 'react';
import { useRef } from "react";
import Features from './Features';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

const description = [
    'Display interactive price charts that show the historical price movements of cryptocurrencies over different timeframes. Users can zoom in/out, scroll, and hover over data points to view detailed price information.',
    'The watchlist feature on our crypto website empowers users to stay updated on their favorite cryptocurrencies effortlessly. By leveraging this tool, users can create a personalized list of cryptocurrencies they want to monitor closely.',
    'Educational resources such as articles, tutorials, and videos for beginners and advanced users'
]
const feature = ['Real Time Market Data', 'Interactive Graphs', 'News & Insight']

{/** To render each feature next to the description */}
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
                <section className='flex relative justify-center items-center perspective-500 h-screen snap-y snap-mandatory snap-center' id='motion_section'>
                    <div className='cards rounded-[7px] bg-[#ebf5ee] absolute top-0 left-0 right-0 bottom-0 w-[300px] h-[400px] md:w-[500px] md:h-[400px] p-5' ref={ref} id='motion_div'>
                        <p className='text-bold md:text-xl'>{descriptions}</p>
                    </div>
                    <motion.h2 className='text_gradient text-2xl tracking-tight md:tracking-[-3px] md:text-4xl lg:text-[56px]' style={{ y }} id='features'>
                        <p>{features}</p>
                    </motion.h2>
                </section>
            </motion.div>
        </>
    );
}

type Props = {}
{/** Main component */}
const MainContent = (props: Props) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {description.map((item, i) => (
                <Description descriptions={item} key={i} features={featuresWithId[i].name} />
            ))}
            {/*<motion.div className='fixed left-0 right-0 h-1 bg-white bottom-[100px]' style={{ scaleX }} />*/}
        </>
    )
}

export default MainContent;