import React from 'react'
import fort from '../assets/images/fort.png';
import Taj from '../assets/images/Taj.png';
import qutub from '../assets/images/qutub.png';
import gate from '../assets/images/gate.png';

const Explore = () => {
  return (
    <div>
       <div class="container mt-4 gap-3">
      <div class="row gap-2 rounded">
    <div class="col"><img src={gate} alt="w1" className='w-full h-72 rounded'/></div>
    <div class="col"><img src={fort} alt="w1" className='w-full h-72 rounded'/></div>
    <div class="w-100"></div>
    <div class="col"><img src={Taj} alt="w1" className='w-full h-72 rounded'/></div>
    <div class="col"><img src={qutub} alt="w1" className='w-full h-72 rounded'/></div>
    </div>
</div>
      
    </div>
  )
}

export default Explore;
