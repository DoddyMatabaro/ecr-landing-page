import React from 'react'
import {hero} from '../assets/data';

function Hero() {
  return (
    <section className='h-screen bg-black'>
      <article className='mt-10 flex gap-'>
            <p className='w-1/2'>
                { hero.devise}
            </p>
            <div className='w-1/2'>
                <h3>APPROPOS DE NOUS</h3>
                <p>{hero.about_info}</p>
                <div>
                    <strong>{hero.projet}+ Projets</strong>
                    <div></div>
                    <strong>{hero.client}+ Clients</strong>
                </div>
            </div>
      </article>
      <article>
          <img src={hero.background} alt="hero section" />
      </article>
    </section>
  )
}

export default Hero