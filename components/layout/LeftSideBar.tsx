import React from 'react'
import Image from 'next/image'
import { navLinks } from '@/lib/constants';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

function LeftSideBar() {
  
  return (
    <div className='h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-2 shadow-xl max-lg:hidden'>
      <Image src="/logo.png"  width={150} height={70} alt='logo'/>
      <div className='flex flex-col gap-12'>
         {navLinks.map((link)=>(
             <Link href={link.url} key={link.label} className='flex gap-4 text-body-medium'>
              <span>{link.icon}</span>          
              {link.label}
          </Link>
         ))}           
      </div>
      <div className="flex items-center gap-4 text-body-medium">
          <UserButton/>
          <p>Edit Profile</p>
      </div>
    </div>
  )
}

export default LeftSideBar;