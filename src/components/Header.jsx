import React from 'react'
import {leftLinks,rightLinks, logo } from '../assets/data';

function Header() {
  return (
    <header className='bg-black text-white p-3 flex flex-row justify-between'>
        <ul className='flex flex-row gap-3 text-white_varient text-1xl'>
          { leftLinks.map((link)=>{
                return(
                  <li><a href={link.url}>{link.text}</a></li>
                )
          })}
        </ul>
        <img src={logo} alt="logo" className='h-8' />
        <ul className='flex flex-row gap-3 text-white_varient text-1xl'>
          { rightLinks.map((link)=>{
                return(
                  <li><a href={link.url}>{link.text}</a></li>
                )
          })}
        </ul>

    </header>
  )
}

export default Header