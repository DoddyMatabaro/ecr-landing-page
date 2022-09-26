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
      dispatch({ type: reducerCases.SET_TESTIMONIAL_INDEX, testimonial_index: 0 })
    }
  }, [testimonialsData, testimonial_index]);

  useEffect(() => {
    let slider = setInterval(() => {
      dispatch({ type: reducerCases.SET_TESTIMONIAL_INDEX, testimonial_index: testimonial_index + 1 })
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [testimonial_index]);

  return (
    <section className='h-screen px-10 my-20 mx-auto bg-grey_varient'>
                <div className='flex flex-row'>
                    <div className='bg-black h-4 w-3 mt-5'></div>
                    <h1 className="text-5xl font-bold ">CE QUE NOS CLIENT DISENT </h1>
                </div>
                <div className="mx-0 mt-16 text-center relative overflow-hidden w-4/5 ">
                    { testimonialsData.map((elt, index)=>{
                      let position = 'translate-x-full';
                      if (index === testimonial_index) {
                        position = 'translate-x-0 opacity-100';
                      }
                      if(
                        index === testimonial_index - 1 ||
                        (testimonial_index === 0 && index === testimonialsData.length - 1)
                      ) {
                        position = '-translate-x-full';
                      }
                      let classesCard = `absolute top-0 left-0 w-full h-full opacity-0 transition-all ${position}`
                      console.log(classesCard); 
                      return(
                          <article className=" w-full h-full opacity-0 " key={elt.id}>
                                    <h1>{elt.organisation}</h1>
                                    <img src={elt.profile} alt={elt.person} className=" rounded-[50%] mb-4 w-40 h-40 
                                        object-cover border-4 divide-solid shadow-black " />
                                    <h4 className="uppercase text-black mb-1 ">{elt.person}</h4>
                                    <p className='capitalise mb-3 text-grey '  >{elt.function}</p>
                                    <p className=' max-w-xl mx-0 my-auto mt-8 leading-loose '>{elt.testimonial}</p> 
                                  <FaQuoteRight className='text-[3rem] mt-[1rem] text-black ' />
                          </article>
                      );
                    })}
                               <button className="text-black absolute t-[200px] translate-y-1/2 bg-yellow w-5 h-5 grid place-items-center border-none text-[1rem] rounded-1 cursor-pointer transition-all hover:bg-black hover:text-yellow left-0" onClick={() =>dispatch({ type: reducerCases.SET_TESTIMONIAL_INDEX, testimonial_index: testimonial_index - 1 })}>
                                  <FiChevronLeft />
                                </button>
                                <button className="text-black absolute t-[200px] translate-y-1/2 bg-yellow w-5 h-5 grid place-items-center border-none text-[1rem] rounded-1 cursor-pointer transition-all hover:bg-black hover:text-yellow right-0" onClick={() =>dispatch({ type: reducerCases.SET_TESTIMONIAL_INDEX, testimonial_index: testimonial_index + 1 })}>
                                    <FiChevronRight />
                                </button>
                 </div>
    </section>
  )
}

export default Testimonials