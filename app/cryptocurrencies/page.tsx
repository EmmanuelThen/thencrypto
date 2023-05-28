import React from 'react';
import Card from '@/components/Card';



type Props = {}

const Cryptocurrencies = (props: Props) => {
    return (
        <>
            <main className='bg-[#347fc4]'>
                <Card amountOfCoins={250} display='' mdColsNum='md:grid-cols-3' lgColsNum='md:grid-cols-5' />
            </main>
        </>
    )
}

export default Cryptocurrencies