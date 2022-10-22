import React from 'react'

function Choose() {
  return (
    <section className='h-screen px-10 py-20 flex flex-col gap-20'>
            <article className="flex flex-row gap-4">
                    <div className='bg-black h-4 w-3 mt-5'></div>
                    <h1 className="text-5xl font-bold uppercase ">Pourquoi nous sommes le meilleur choix</h1>
           </article>
          <article className='flex flex-row flex-wrap '>
              <div className='flex flex-row gap-4 w-1/2 border-r-[1px] border-b-[1px] border-grey_varient p-4'>
                      <b className=' text-grey_varient text-xl'>
                          01
                      </b>
                      <div className='flex flex-col gap-4 '>
                        <h3 className='text-xl font-bold text-left'>Le Prix Raisonnable</h3>
                        <p className='text-grey_varient text-xs max-w-[80%]'>Nous faisons tout notre possible pour que nos clients aient accès à un habitat décent à un coût accissible.</p>
                      </div>
                </div>
                <div className='flex flex-row gap-4 w-1/2 border-b-[1px] border-grey_varient p-4'>
                      <b className=' text-grey_varient text-xl'>
                          02
                      </b>
                      <div className='flex flex-col gap-4 '>
                        <h3 className='text-xl font-bold text-left'>Le Prix Raisonnable</h3>
                        <p className='text-grey_varient text-xs max-w-[80%]'>Nous faisons tout notre possible pour que nos clients aient accès à un habitat décent à un coût accissible.</p>
                      </div>
                </div>
                <div className='flex flex-row gap-4 w-1/2 border-r-[1px]  border-grey_varient p-4'>
                      <b className=' text-grey_varient text-xl'>
                          03
                      </b>
                      <div className='flex flex-col gap-4 '>
                        <h3 className='text-xl font-bold text-left'>Le Prix Raisonnable</h3>
                        <p className='text-grey_varient text-xs max-w-[80%]'>Nous faisons tout notre possible pour que nos clients aient accès à un habitat décent à un coût accissible.</p>
                      </div>
                </div>
                <div className='flex flex-row gap-4 w-1/2  border-grey_varient p-4'>
                      <b className=' text-grey_varient text-xl'>
                          04
                      </b>
                      <div className='flex flex-col gap-4 '>
                        <h3 className='text-xl font-bold text-left'>Le Prix Raisonnable</h3>
                        <p className='text-grey_varient text-xs max-w-[80%]'>Nous faisons tout notre possible pour que nos clients aient accès à un habitat décent à un coût accissible.</p>
                      </div>
                </div>
               
          </article>
    </section>
  )
}

export default Choose