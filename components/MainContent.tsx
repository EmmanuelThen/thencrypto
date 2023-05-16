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
import Image from 'next/image';
import { TrendingUpOutlined } from '@mui/icons-material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const imagesArr = [TrendingUpOutlined, EqualizerIcon, AutoAwesomeIcon, AttachMoneyIcon]

const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance])
}

{/** Image component */}
const Imagez = ({id}: { id: number }) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref});
  const y = useParallax(scrollYProgress, 300);
  

  return (
    <section className='flex relative justify-center items-center perspective-500 h-screen snap-y snap-mandatory' id='motion_section'>
        <div ref={ref} id='motion_div'>
            Decsriptions
        </div>
        <motion.h2 style={{ y }} id='features'>
            {`#00${id}`}
        </motion.h2>
    </section>
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
            {imagesArr.map((image, id) => (<Imagez id={image} key={id} />))}
            <motion.div className='fixed left-0 right-0 h-1 bg-white bottom-[100px]' style={{ scaleX }} />

            
        </>
    )
}

export default MainContent;