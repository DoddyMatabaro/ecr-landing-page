import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Projects() {
  return (
    <section className='h-screen flex flex-col justify-center py-10 px-10 align-middle gap-4'>
    <article className='flex flex-row justify-between'>
            <div className="flex flex-row gap-4">
                        <div className='bg-black h-4 w-3 mt-5'></div>
                        <h1 className="text-5xl font-bold ">NOS REALISATIONS  </h1>
            </div>
            <div className='flex flex-row justify-center gap-3 align-middle'>
                <b>Voir plus</b>
                <FaArrowRight className='mt-1'/>
            </div>
    </article>
    <article className='flex my-10 flex-row gap-2 justify-center align-middle h-[95%]'>
        <div className='bg-black w-1/4 rounded-bl-[100px] overflow-hidden'>
          <img src='dd' alt='image 1'/>
        </div>
        <div className='bg-black w-2/4'>
          <img src='dd' alt='image 1'/>
        </div>
        <div className='bg-black w-1/4 rounded-tr-[100px] '>
          <img src='dd' alt='image 1'/>
        </div>
    </article>
    </section>
  )
}

export default Projects