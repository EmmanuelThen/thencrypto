import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='flex justify-center items-center p-[500px]'>
      <div className="honeycomb">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading;