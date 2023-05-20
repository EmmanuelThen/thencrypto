import React from 'react'

type Props = {}

const Title = (props: Props) => {
    return (
        <div className=''>
            <div className='flex justify-center items-center h-[100px]'>
                <div className='flex items-center'>
                    <span className='text_gradient text-[#347fc4] text-[60px] py-6'>[</span>
                    <h1 className='text-white text-4xl mx-5' id='text_shadow'>Features</h1>
                    <span className='text_gradient text-[#347fc4] text-[60px] py-6'>]</span>
                </div>
            </div>
        </div>
    )
}

export default Title