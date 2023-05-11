import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='hero_wrapper hidden md:flex md:h-screen justify-center md:min-w-[25%] bg-[#191716]'>
        <div className=''>
            <h1 className='font-semibold text-xl p-10 text-white'>Top Crypto News</h1>
        </div>
    </div>
  )
}

export default Sidebar