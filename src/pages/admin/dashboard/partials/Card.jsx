import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({route, title}) => {
    const navigate = useNavigate();
  return (
    <div className='border-2 border-red-700 px-10 py-7 rounded-3xl cursor-pointer hover:bg-red-700 transition duration-300' onClick={() => {navigate(route)}}>
        <h4 className='text-[20px] font-bold text-center'>{title}</h4>
    </div>
  )
}

export default Card