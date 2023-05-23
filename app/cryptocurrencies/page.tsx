import React from 'react';
import Card from '@/components/Card';
import RootLayout from '../layout';
import Searchbar from '@/components/Searchbar';
import Navbar from '@/components/Navbar';

type Props = {}

const Cryptocurrencies = (props: Props) => {
    return (
        <RootLayout>
            <Navbar />
            <Card />
        </RootLayout>
    )
}

export default Cryptocurrencies