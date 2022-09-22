import React from 'react'
import {leftLinks,rightLinks, logo } from '../assets/data';

function Header() {
  return (
    <header className='bg-black border-b-2 text-white py-3 px-10 flex flex-row justify-between'>
        <ul className='flex flex-row gap-3 text-white_varient text-1xl'>
          { leftLinks.map((link)=>{
                return(
                  <li key={link.id} className="text-[12px]"><a href={link.url}>{link.text}</a></li>
                )
          })}
        </ul>

        <img src={logo} alt="logo" className='h-8' />
       
        <ul className='flex flex-row gap-3 text-white_varient text-1xl'>
          { rightLinks.map((link)=>{
                return(
                  <li key={link.id} className='text-[12px]' ><a href={link.url}>{link.text}</a></li>
                )
          })}
        </ul>

    </header>
  )
}

export default Header