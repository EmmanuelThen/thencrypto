'use client'
import React, { useState } from 'react'
import MenuBookIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/thencrypto-logo.png'
import CloseIcon from '@mui/icons-material/Close';

const Menu = ({ }) => {
    return (
        <>
            <Link href='/' className='text-[#ebf5ee] hover:text-[#191716]'>Home</Link>
            <Link href='/cryptocurrencies' className='text-[#ebf5ee] hover:text-[#191716]'>Cryptocurrencies</Link>
        </>
    )
}

const Navbar = ({ }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <>
            <div className='p-4 sticky top-0 bg-[#347fc4] z-[2]'>
                {/** Mobile Nav */}
                <nav className='flex justify-between md:hidden'>
                    <div id='top-logo'>
                        <Image src={logo} alt='ThenCrypto-logo' width={40} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <h1>Then<span className='text_gradient'>Crypto</span></h1>
                    </div>
                    <div className='flex flex-col justify-center text-[#347fc4] hover:text-[#191716] cursor-pointer'>
                        <button type='button' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <CloseIcon /> : <MenuBookIcon />}
                        </button>
                    </div>
                    {isMobileMenuOpen && (
                        <>
                            <div className='menu_wrapper absolute w-[100vw] top-0 right-0 text-xs mt-[7vh] shadow-lg'>
                                <div className='menu_popover relative flex flex-col items-center p-5 gap-10'>
                                    <Menu />
                                </div>
                            </div>
                        </>
                    )}
                </nav>
                {/** Full Nav */}
                <div className='hidden md:flex justify-between items-center'>
                    <Image src={logo} alt='ThenCrypto-logo' width={40} id='top-image' />
                    <h1>Then<span className='text_gradient'>Crypto</span></h1>
                    <div className='flex gap-10 mr-8'>
                        <Menu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar