import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input 
        type='text'
        placeholder='username'
        id='username'
        className='border p-3 rounded-lg'
         />

        <input
          type='email'
          placeholder='email'
          id='email'
          className='border p-3 rounded-lg'
          
        />
        <input
          type='password'
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
        />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>
        Update </button>
      <Link  className='bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95'
          to={'/create-listing'} >
             Create Listing
      </Link>
    </form>
     
    
    </div>
  )
}
