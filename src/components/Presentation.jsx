import React from 'react'
import presentation from '../assets/inspiration/presentation.mp4';

function Presentation() {
  return (
   
      <iframe class="w-full aspect-video md:aspect-square" src={presentation}></iframe>

  )
}

export default Presentation