import React from 'react'
import {hero} from '../assets/data';
// import ReactArcText from 'react-arc-text';

function Hero() {
  let text = '';
  let classFont = '';
  let direction = 1;
  let arc = 150;

  return (
    <section className='h-screen bg-black px-10 overflow-hidden p-4 mb-4'>
      <article className='flex gap-16 h-1/2 py-10 text-justify'>
            <p className='w-1/2 text-white text-left text-3xl font-bold bold uppercase'>
                {hero.devise}
            </p>
            <div className='w-1/2  flex flex-col gap-4 px-10'>
              <h3 className='bold text-white uppercase font-semibold'>Qui sommes nous : </h3>
                <p className='text-justify text-grey_varient text-[12px] font-semibold'>{hero.about_info}</p>
                <div className='flex  justify-between  gap-2 text-white font-semibold'>
                    <strong>{hero.projet}+ Projets</strong>
                    <div className='h-1 bg-white w-1/5 mt-3'> </div>
                    <strong>{hero.client}+ Clients</strong>
                </div>
            </div>
      </article>
      <article className='rounded-t-[50px] mb-10 h-1/2 w-[100%]'>
          <div className='flex flex-row-reverse'> 
              <div className='z-10 absolute bg-yellow w-[5rem] h-[5rem] rounded-[50%] flex justify-center align-center text-center -m-4'>
              {/* <ReactArcText
                  text={text}
                  direction={direction}
                  arc={arc}
                  class={classFont}
                  /> */}
                  {/* <div className="bg-black w-4 h-4 rounded-full m-7"></div> */}
                  
              </div>
                  <img src={hero.image} alt="hero section" className='object-fill relative h-full rounded-t-[100px]' />
           </div>

      </article>
    </section>
  )
}

export default Hero