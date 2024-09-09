import React from 'react'
import Icon from "@icon/TEDLogoDesc.png";

const Footer = () => {
  return (
    <div className='w-full h-[70px] bg-black text-white text-center flex justify-center items-center space-x-10'>
        <img src={Icon} className="h-10" alt="" />
        <p className='text-[12px]'>Copyright © 2022 - All right reserved</p>
    </div>
  )
}

export default Footer