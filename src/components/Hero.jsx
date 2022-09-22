import React from 'react'
import {hero} from '../assets/data';
// import ReactArcText from 'react-arc-text';

function Hero() {
  let text = '';
  let classFont = '';
  let direction = 1;
  let arc = 150;

  return (
    <section className='h-screen bg-black px-10 overflow-hidden p-4'>
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
      <article className='h-full rounded-t-[50px] mb-10'>
          <div className='bg-hero bg-center h-full rounded-t-[60px] flex flex-row-reverse'> 
              <div className=' bg-yellow w-[5rem] h-[5rem] rounded-[50%] flex justify-center align-center text-center -m-4'>
              {/* <ReactArcText
                  text={text}
                  direction={direction}
                  arc={arc}
                  class={classFont}
                  /> */}
                  {/* <div className="bg-black w-4 h-4 rounded-full m-7"></div> */}
              </div>
               {/* <img src={hero.image} alt="hero section" className='h-1/2'/> */}
           </div>

      </article>
    </section>
  )
}

export default Hero