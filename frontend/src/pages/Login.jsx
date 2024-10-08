import React, { useState } from 'react'

const Login = () => {

  const [currentstate,setCurrentState]= useState('Sign Up');

  const onSubmitHandler  = async (event)=>{
    event.preventDefault();
  }


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[400px] sm-max-96 m-auto mt-14 gap-4 text-gray-500'>
       <div  className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prate-regulatar text-3xl'>{currentstate}</p>
          <hr className='border-none h-[1.5px]  w-8 bg-gray-800' />
        </div> 
       
       {currentstate === 'Login' ? '': <input className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' type="text"  required />}
        <input className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' type="email" required />
        <input className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' type="password" required />
             <div className='w-full justify-between text-sm mt-[-8px]'>
                
                {
                  currentstate === 'Login'
                  ?<p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer '>Create Account</p>
                  :<p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here </p>
                }
             </div>
             <button className='bg-black text-white px-5 py-3 text-sm'>{currentstate === 'Login' ? 'Sign In ' : 'Sign Up'}</button>
    </form>
  )
}
 
export default Login