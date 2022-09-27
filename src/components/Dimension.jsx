import React from 'react'
import plan from  '../assets/images/ECR/plan1.jpg'
import etude1 from  '../assets/images/ECR/etude.jpeg'
import etude2 from  '../assets/images/ECR/etude2.jpeg'
import realisation from  '../assets/images/ECR/realisation.jpg'

function Dimension() {
  return (
    <section className='h-screen flex flex-col justify-center py-10 px-10 align-middle gap-4'>
        <article className="flex flex-row gap-4">
                    <div className='bg-black h-4 w-3 mt-5'></div>
                    <h1 className="text-5xl font-bold uppercase ">Inegale dans toutes les dimensions</h1>
        </article>
        <article className='flex flex-row justify-around gap-10 p-20 '>
              <div className='flex flex-col justify-center align-middle '>
                  <div className='relative bg-yellow rounded-[50%] overflow-hidden w-52 h-52'>
                      <img src={etude1} alt='plan' className='object-fill w-full h-full'/>
                  </div>  
                  <div className='font-bold text-center bg-black z-10  absolute 
                                  opacity-70 w-52 h-52 p-20 text-white rounded-[50%]
                                  hover:-mb-52 hover:-ml-10 hover:animate-bounce
                                  '
                      > 
                        <b className='text-2xl -rotate-[120deg] ' style={{ writingMode: 'vertical-rl'}}>Etude</b>
                  </div>  
              </div>
              <div className='flex flex-col justify-center align-middle '>
                  <div className='relative bg-yellow rounded-[50%] overflow-hidden w-52 h-52'>
                      <img src={plan} alt='plan' className='object-fill w-full h-full'/>
                  </div>  
                  <div className='font-bold text-center bg-black z-10  absolute 
                                  opacity-70 w-52 h-52 p-10 text-white rounded-[50%]
                                  hover:-mb-52 hover:-ml-10 hover:animate-bounce
                                  '
                      > 
                        <b className='text-2xl -rotate-[120deg] ' style={{ writingMode: 'vertical-rl'}}>Conception</b>
                  </div>  
                  
              </div>
              <div className='flex flex-col justify-center align-middle '>
                  <div className='relative bg-yellow rounded-[50%] overflow-hidden w-52 h-52'>
                      <img src={realisation} alt='plan' className='object-fill w-full h-full'/>
                  </div>  
                  <div className='font-bold text-center bg-black z-10  absolute 
                                  opacity-70 w-52 h-52 p-10 text-white rounded-[50%]
                                  hover:-mb-52 hover:-ml-10 hover:animate-bounce
                                  '
                      > 
                        <b className='text-2xl -rotate-[120deg] ' style={{ writingMode: 'vertical-rl'}}>Réalisation</b>
                  </div>  
                  
              </div>
        </article>
        
    </section>
  )
}

export default Dimension