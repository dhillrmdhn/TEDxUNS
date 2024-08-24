import React from 'react'
import InputText from '../../../../components/input/inputText'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-white space-y-6 py-20'>
        <div>
            <img src="https://i.ibb.co.com/n8GdCvJ/Whats-App-Image-2024-08-21-at-13-47-21.jpg" className='h-20' alt="" />
        </div>
        <div className='w-[60%] border-2 border-red-700 p-10 space-y-6 rounded-3xl'>
            <div>
                <h1 className='text-h3 font-bold'>Register</h1>
            </div>
            <div className='space-y-3'>
                <InputText>Email</InputText>
                <InputText>Password</InputText>
                <InputText>Confirm Password</InputText>
                <InputText>Password</InputText>
            </div>
            <div className='space-x-3'>
                <button className='text-white bg-red-700 px-4 py-2 rounded-xl hover:bg-red-800'>
                    Submit
                </button>
                <Link to='/login'>
                <button className='text-black bg-white px-4 py-2 rounded-xl hover:bg-red-800'>
                    Have an account? Login Here
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Form