'use client'
// import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import React from 'react';
import { Avatar,AvatarImage,AvatarFallback } from '@/components/ui/avatar';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';


type Props = {}

const Navbar = (props: Props) => {
    const list = ['Female','Male','Kids','All Products']
  return (
    <div className='my-12 flex justify-between'>
        <div className='w-28 h-6 cursor-pointer'>
          <img className='w-full h-full' src="https://dine-market-bay.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.962f4500.png&w=256&q=75" alt="" />
        </div>

        {/* Links */}
        <div className='flex items-center justify-between w-[25%]'>
          {
          list.map((element)=>(
            <div className='font-semibold'>{element}</div>
          ))
        }
        </div>


        {/* Searchbar */}
        <Input type="text" placeholder="What are you looking for" />

        {/* Buttons */}
        <div className='flex gap-5'>
        <div>
        <Button variant="outline">Sign In</Button>
        </div>

        {/* Shopping Cart */}
        <div className='bg-gray-100 relative w-10 h-10 flex items-center justify-center rounded-full'>
          <p className='text-sm rounded-full px-1 text-white font-medium bg-red-400 absolute -top-2 -right-1'>0</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        </div>
        </div>


    </div>
  )
}

export default Navbar