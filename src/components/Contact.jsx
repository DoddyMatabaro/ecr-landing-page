import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function Contact() {
  return (
    <section className='px-10  flex flex-row bg-black border-b-grey border-b-2'>
          <article className="w-1/2 py-20">
              <strong className="max-w-full text-white_varient text-[48px]">SO, WHAT YOU WAITING FOR? LET'S TALK YOUR PROJECT!</strong>
          </article>
              <form className='w-1/2 p-20 flex flex-col justify-center align-middle gap-4'>
                  <div className='flex flex-row justify-center align-middle gap-2 p-4 rounded-[50px] bg-grey' >
                      <input type="mail" name="mail" placeholder="Business email" className='bg-grey'/>
                      <FaArrowRight className='text-yellow'/>
                  </div>
                  <button type="submit" className='p-4 bg-yellow  rounded-[100px]'>
                    Contact Us
                  </button>
              </form>
    </section>
  )
}

export default Contact