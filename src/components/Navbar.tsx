import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='fixed top-4 left-8 h-[3rem] w-[95%] flex items-center'>
        <Image src = '/logo.jpeg' alt = 'logo image' width={45} height={20} className='rounded-lg'></Image>

        <div className='bg-white w-[38rem] rounded-lg ml-[0.5rem] bg-opacity-10 flex items-center justify-center h-full'>
            <ul className='uppercase flex items-center text-zinc-300 gap-4'>
                <Button className='uppercase bg-transparent border border-zinc-600 text-[14px]'>how it works</Button>
                <Button className='uppercase bg-transparent border border-zinc-600 text-[14px]'>our services</Button>
                <Button className='uppercase bg-transparent border border-zinc-600 text-[14px]'>token rewards</Button>
                <Button className='uppercase bg-transparent border border-zinc-600 text-[14px]'>About us</Button>
            </ul>
        </div>
        <Button className='border border-zinc-600 h-[90%] ml-[45%] bg-transparent w-[6rem] text-[16px] text-zinc-300'>Log in</Button>
    </nav>
  )
}

export default Navbar