'use client';
import { navLinks } from '@/lib/constants';
import { UserButton } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function TopBar() {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const handleClick = () => {
      setDropdownMenu(!dropdownMenu);
  }
  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 b-blue-2 shadow-xl lg:hidden">
      <Image src="/logo.png"  width={150} height={70} alt='logo'/>
      <div className='flex  gap-8 max-md:hidden'>
         {navLinks.map((link)=>(
             <Link href={link.url} key={link.label} className='flex gap-4 text-body-medium'>          
              {link.label}
          </Link>
         ))}           
      </div>
      <div className="relative flex gap-4 items-center text-body-medium ">
          <Menu className='cursor-pointer md:hidden' onClick={handleClick}/>
            {dropdownMenu && (
                   <div className={`absolute top-10 right-6 p-10 flex flex-col rounded-md gap-12 bg-blue-2 shadow-xl dropdown-menu ${dropdownMenu ? 'visible' : ''}`}>
                   {navLinks.map((link)=>(
                       <Link href={link.url} key={link.label} className='flex hover:text-gray-500 animate-bounce  gap-10 text-body-medium'>          
                        <span>{link.icon}</span>   
                        {link.label}
                    </Link>
                   ))}           
                </div>
            )}
          <UserButton/>
      </div>
    </div>
  )
}

export default TopBar;
