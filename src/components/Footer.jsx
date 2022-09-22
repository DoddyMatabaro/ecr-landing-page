import React from 'react'
import {footer} from '../assets/data'
function Footer() {
  return (
    <section className='bg-black flex flex-col justify-center align-center'>
        <article className='px-10 h-[100%] flex felx-col gap-10 justify-between' >
          <div className="flex flex-col justify-center align-center text-[11px] text-grey p-1 gap-4">
              <img src={footer.ecr.logo} alt="logo" className='h-15 w-20'/>
              <p className="max-w-[5rem]">
                {footer.ecr.adresse} <br/>
                {footer.ecr.mail}
              </p>
              <ul className='flex flex-row gap-1'>
                  {
                    footer.ecr.socials.map((social)=>{
                      return(
                        <li key={social.id}><a href={social.url}>{social.icon} </a></li>
                      )
                    })
                  }
              </ul>
          </div>
          <div className="flex flex-col justify-center align-center text-[11px] text-grey p-1 gap-4">
              <h3 className='bold text-white text-[18px]'>PESPECTIVES</h3>
              <ul className='flex flex-col gap-1'>
                  {
                    footer.features.map((feature, index)=>{
                      return(
                        <li key={index.toString()}>{feature} </li>
                      )
                    })
                  }
              </ul>
          </div>
          <div className="flex flex-col justify-center align-center text-[11px] text-grey p-1 gap-4">
              <h3 className='bold text-white text-[18px]'>SOLUTIONS</h3>
              <ul className='flex flex-col gap-1'>
                  {
                    footer.solutions.map((solution, index)=>{
                      return(
                        <li key={index.toString()}>{solution} </li>
                      )
                    })
                  }
              </ul>
          </div>
          <div className="flex flex-col justify-center align-center text-[11px] text-grey p-1 gap-4">
              <h3 className='bold text-white text-[18px]'>RESSOURCES</h3>
              <ul className='flex flex-col gap-1'>
                  {
                    footer.ressources.map((ressource, index)=>{
                      return(
                        <li key={index.toString()}>{ressource} </li>
                      )
                    })
                  }
              </ul>
          </div>
          <div className="flex flex-col justify-center align-center text-[11px] text-grey p-1 gap-4">
              <h3 className='bold text-white text-[18px]'>RESSOURCES</h3>
              <ul className='flex flex-col gap-1'>
                  {
                    footer.ressources.map((ressource, index)=>{
                      return(
                        <li key={index.toString()}>{ressource} </li>
                      )
                    })
                  }
              </ul>
          </div>
        </article>
        
        <article className='px-10 bg-grey text-white flex flex-row justify-between text-[10px] py-2'>
            <div>DEPUIS-2022</div>
            <div>© 2022 COPYRIGHT BY BDS </div>
            <div>TERM PRIVACY</div>
        </article>
    </section>
  )
}

export default Footer