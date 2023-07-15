import React from 'react'

type Props = {}

const Subscribe = (props: Props) => {
  return (
    <div className='relative flex items-center justify-center text-center z-[1]'>
        <div className='opacity-20 -z-[1] font-black text-9xl absolute'>
            Newsletter
        </div>

        <div>
            <p className='font-bold text-4xl'>Subscribe Our Newsletter</p>
            <p className='font-medium text-lg py-6'>Get the latest information and promo offers directly</p>
            <div>
                <input type="text" className='border-2 h-10 w-[1/2] focus:outline-none' placeholder='Input email address'/>
                {/* <button className='text-sm text-white font-bold bg-black w-[35%] h-10 flex items-center justify-center'>Get Started</button> */}
                <button className='text-sm text-white font-bold bg-black w-[15%] h-10'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe