import React from 'react'
import { globalContext } from '../utils/context'
import { FAQBase } from '../assets/data'
import { FaPlus, FaLess, FaMinus } from 'react-icons/fa';
import { reducerCases } from '../utils/constants'
function FAQ() {
  const [{ faq } , dispatch] = globalContext();
  console.log(faq)
  return (
    <section className='h-screen bg-yellow px-10 py-20 flex flex-col justify-center gap-10'>
          <div className='flex flex-row gap-4 '>
                <div className='bg-black p-2'></div>
                <h1 className="text-5xl font-bold ">FREQUENTLY ASKED QUESTIONS</h1>
          </div>
          <article className="flex flex-col gap-2">
              {
                FAQBase.map((item)=>{
                    return(
                      <div key={item.id} className="border-black border-b-2 flex flex-col gap-4 p-2 ">
                          <div className="flex flex-row justify-between">
                              <h3 className="font-bold">{item.question}</h3>
                              <div onClick={
                                  ()=>{
                                    let value = item.id;
                                    dispatch({ type: reducerCases.SET_FAQ, value })
                                  }
                              } >
                                  { faq===item.id ?<FaMinus/>:<FaPlus/>}
                              </div>
                          </div>
                          {faq===item.id && <p className="text-[12px] max-w-xl text-black">{item.answer}</p> }
                      </div>
                    )
                })
              
              }
          </article>


    </section>
  )
}

export default FAQ