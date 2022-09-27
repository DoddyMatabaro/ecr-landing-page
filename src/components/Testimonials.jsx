import React, {useEffect } from 'react'
import { globalContext } from '../utils/context'
import { reducerCases } from '../utils/constants';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function Testimonials() {
  const[{ testimonialsData, testimonial_index}, dispatch] = globalContext();

  useEffect(() => {
    const lastIndex = testimonialsData.length - 1;
    if (testimonial_index < 0) {
      dispatch({ type: reducerCases.SET_TESTIMONIAL_INDEX, lastIndex })
    }
    if (testimonial_index > lastIndex) {
      let value = 0
      dispatch({ type: reducerCases.SET_TESTIMONIAL_INDEX, value })
    }
  }, [testimonialsData, testimonial_index]);

  useEffect(() => {
    let slider = setInterval(() => {
      let value = testimonial_index + 1;
      console.log("Avant : " + testimonial_index);
      dispatch({ type: reducerCases.SET_TESTIMONIAL_INDEX, value })
    }, 5000);
    console.log("Apres : " + testimonial_index);
    return () => {
      clearInterval(slider);
    };
  }, [testimonial_index]);

  console.log(testimonial_index);
  return (
    <section className='h-screen w-[100vw] py-10 px-10 bg-grey_varient max-w-[1170px]'>
                <div className='flex flex-row gap-4'>
                    <div className='bg-black h-4 w-3 mt-5'></div>
                    <h1 className="text-5xl font-bold ">CE QUE DISENT NOS CLIENTS  </h1>
                </div>
                <div className="mt-16 text-center relative overflow-hidden h-[450px] w-[100%] flex justify-center align-middle ">
                    { testimonialsData.map((elt, index)=>{
                      let position = 'nextSlide';
                      if (index === testimonial_index) {
                        position = 'activeSlide'; 
                      }
                      if(
                        index === testimonial_index - 1 ||
                        (testimonial_index === 0 && index === testimonialsData.length - 1)
                      ) {
                        position = 'lastSlide';
                      } 
                      return(
                          <article className={'slide '+position} key={elt.id}>
                                    <h1 className='font-bold text-2xl mb-4 uppercase' >{elt.organisation}</h1>
                                    <img src={elt.profile} alt={elt.person} className=" rounded-[50%] mb-4 w-40 h-40 
                                        object-cover border-4 divide-solid shadow-black " />
                                    <h4 className="uppercase text-black mb-1 ">{elt.person}</h4>
                                    <p className='capitalise mb-3 text-grey '  >{elt.function}</p>
                                    <p className=' max-w-xl mx-0 my-auto mt-8 leading-loose '>{elt.testimonial}</p> 
                                  <FaQuoteRight className='text-[3rem] mt-[1rem] text-black ' />
                          </article>
                      );
                    })}
                               <button className="text-black absolute top-[200px] -translate-y-1/2 w-10 h-10 grid place-items-center border-none text-[2rem] rounded-1 cursor-pointer transition-all hover:bg-black hover:text-yellow left-0"
                                       onClick={() =>dispatch({ type: reducerCases.SET_TESTIMONIAL_INDEX, testimonial_index: testimonial_index - 1 })}>
                                  <FiChevronLeft />
                                </button>
                                <button className="text-black absolute top-[200px] -translate-y-1/2 w-10 h-10 grid place-items-center border-none text-[2rem] rounded-1 cursor-pointer transition-all hover:bg-black hover:text-yellow right-0" 
                                          onClick={() =>dispatch({ type: reducerCases.SET_TESTIMONIAL_INDEX, testimonial_index: testimonial_index + 1 })}>
                                    <FiChevronRight />
                                </button>
                 </div>
    </section>
  )
}

export default Testimonials