import React from 'react'
import InputText from '../../../../components/input/inputText'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-white w-full'>
        <div className='space-y-6 w-full'>
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
                <button className='text-white bg-red-700 px-4 py-2 rounded-xl hover:bg-white hover:text-black transition duration-100 ease-in'>
                    Submit
                </button>
                <Link to='/login'>
                <button className='text-black bg-white px-4 py-2 rounded-xl hover:bg-red hover:text-white transition duration-100 ease-in'>
                    Have an account? Login Here
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Form