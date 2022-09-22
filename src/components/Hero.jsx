import React from 'react'
import {hero} from '../assets/data';

function Hero() {
  return (
    <section className='h-screen bg-black px-10 overflow-hidden mb-10'>
      <article className='flex gap-16 h-1/2 py-10 text-justify'>
            <p className='w-1/2 text-white text-left text-3xl bold'>
                {hero.devise}
            </p>
            <div className='w-1/2  flex flex-col gap-4 px-10'>
                <h3 className='bold text-white'>APROPOS DE NOUS</h3>
                <p className='text-justify text-grey_varient text-[12px] '>{hero.about_info}</p>
                <div className='flex  justify-between  gap-2 text-white'>
                    <strong>{hero.projet}+ Projets</strong>
                    <div className='h-1 bg-white w-1/5 mt-3'> </div>
                    <strong>{hero.client}+ Clients</strong>
                </div>
            </div>
      </article>
      <article>
          <div className='bg-yellow w-[5rem] h-[5rem] rounded-full'>
            <div>
              <p>BUILD YOUR PROJECT</p>
              <div></div>
            </div>
              <div className="bg-black w-4 h-4"></div>
          </div>
          <div className='rounded-t-[60px] overflow-y-hidden mb-2'>
               <img src={hero.image} alt="hero section" className='h-1/2'/>
          </div>
      </article>
    </section>
  )
}

export default Hero