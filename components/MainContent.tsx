'use client'
import React from 'react';
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";





const description = [
    'Display interactive price charts that show the historical price movements of cryptocurrencies over different timeframes (e.g., hours, days, weeks, months). Users can zoom in/out, scroll, and hover over data points to view detailed price information.',
    'Data visualization tools such as charts, graphs, and heatmaps for easy interpretation of complex data.',
    'Educational resources such as articles, tutorials, and videos for beginners and advanced users'
]
const feature = ['Real Time Market Data', 'Interactive Charts', 'News & Insight']

{/** To render each feature next to the description */}
const featuresWithId = feature.map((item, i) => ({
    id: i + 1,
    name: item,
  }));


const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance])
}

{/** Image component */ }
const Description = ({ features, descriptions }: any) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);


    return (
        <>
            <motion.div
            
            >
                <section className='flex relative justify-center items-center perspective-500 h-screen snap-y snap-mandatory snap-center' id='motion_section'>
                    <div className='hero_wrapper absolute top-0 left-0 right-0 bottom-0 w-full h-full' ref={ref} id='motion_div'>
                        {descriptions}
                    </div>
                    <motion.h2 className='text-2xl tracking-tight md:tracking-[-3px] md:text-4xl lg:text-[56px]' style={{ y }} id='features'>
                        <p>{features}</p>
                    </motion.h2>
                </section>
            </motion.div>
        </>
    );
}

type Props = {}

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
            <motion.div className='fixed left-0 right-0 h-1 bg-white bottom-[100px]' style={{ scaleX }} />


        </>
    )
}

export default MainContent;