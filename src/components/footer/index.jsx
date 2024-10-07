import React from 'react'
import Icon from "@icon/TEDLogoDesc.png";

const Footer = () => {
  return (
    <div className='w-full h-[70px] bg-black text-white text-center flex px-10 justify-center items-center lg:space-x-10 space-x-5'>
        <img src={Icon} className="h-8 md:h-10" alt="" />
        <p className='text-[12px]'>Copyright © 2022 <span className='hidden md:inline'>- All right reserved</span></p>
    </div>
  )
}

export default Footer