"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';


import { AiOutlineBulb,AiFillHome,AiFillAppstore } from "react-icons/ai";
import { BsDiagram3,BsBoomboxFill } from "react-icons/bs";



export const Navbar = () => {
  const currentPath = usePathname()

  const isActive =(path)=>{
   return currentPath === path
  }
  return (
    <nav className='flex flex-col w-[95px] z-20 shadow-lg  text-sm bg-white rounded-lg rounded-tl--2 pt-1 text-gray-600  italic fixed mt-1'>
         <Link className={isActive("/")?"active navContainer":"navContainer"}  href="/">
           <AiFillHome width={50} />
           <p>Home</p>
          
        </Link>
        <Link className={isActive("/knowus")?"active navContainer":"navContainer"}  href="/knowus">
           <AiOutlineBulb/>
           <p>Know Us</p>
        </Link>
        <Link className={isActive("/brands")?"active navContainer":"navContainer"} href="/brands">
           <AiFillHome/>
           <p>Brands</p>
        </Link>
        <Link className={isActive("/distributors")?"active navContainer":"navContainer"} href="/distributors">
           <BsDiagram3/>
           <p>Distributors</p>
        </Link>
        <Link className={isActive("/retailer")?"active navContainer":"navContainer"} href="/retailer">
           <BsBoomboxFill/>
           <p>Retailer</p>
        </Link>
        <Link className={isActive("/ourapps")?"active navContainer":"navContainer"}href="/ourapps">
           <AiFillAppstore/>
           <p>Our Apps</p>
        </Link>
        <Link className={isActive("/advertisers")?"active navContainer":"navContainer"} href="/advertisers">
           <BsBoomboxFill/>
           <p>Advertisers</p>
        </Link>
        <Link className={isActive("/partners")?"active navContainer":"navContainer"} href="/partners">
           <AiFillAppstore/>
           <p>Partners</p>
        </Link>
        
    </nav>
  )
}
