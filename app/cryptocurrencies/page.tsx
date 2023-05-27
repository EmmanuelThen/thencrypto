import React from 'react';
import Card from '@/components/Card';
import { Suspense } from 'react';
import Loading from './loading';
import Searchbar from '@/components/Searchbar';

type Props = {}

const Cryptocurrencies = (props: Props) => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <main className='bg-[#347fc4]'>
                    <Card amountOfCoins={250} display='' mdColsNum='md:grid-cols-3' lgColsNum='md:grid-cols-5' />
                </main>
            </Suspense>
        </>
    )
}

export default Cryptocurrencies