import React from 'react'
import {hero} from '../assets/data';

function Hero() {
  return (
    <section className='h-screen bg-black px-10'>
      <article className='flex gap-10 h-1/2 py-10 text-justify'>
            <p className='w-1/2 text-white text-left text-3xl bold'>
                {hero.devise}
            </p>
            <div className='w-1/2 '>
                <h3>APROPOS DE NOUS</h3>
                <p>{hero.about_info}</p>
                <div>
                    <strong>{hero.projet}+ Projets</strong>
                    <div></div>
                    <strong>{hero.client}+ Clients</strong>
                </div>
            </div>
      </article>
      <article>
          <img src={hero.image} alt="hero section" />
      </article>
    </section>
  )
}

export default Hero