import React from 'react';
import Link from 'next/link';

type Props = {}

const Button = (props: Props) => {
    return (
        <div className='h-[20vh] md:h-screen w-full flex justify-center items-center'>
            <Link href='/cryptocurrencies'>
                <button className='btn hover:scale-110 hover:transition-all hover:duration-125 ease-in-out py-2 px-4 md:py-4 md:px-8 lg:py-8 lg:px-10'>
                    <span className='font-semibold text-2xl md:text-4xl lg:text-[56px]' id='text_shadow'>Lets go</span>
                </button>
            </Link>
        </div>
    )
}

export default Button