import React from 'react';
import Card from '@/components/Card';
import { Suspense } from 'react';
import Loading from './loading';

type Props = {}

const Cryptocurrencies = (props: Props) => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <main className='bg-[#347fc4]'>
                    <Card />
                </main>
            </Suspense>
        </>
    )
}

export default Cryptocurrencies