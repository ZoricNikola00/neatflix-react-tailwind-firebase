import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

const SignIn = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const navigate=useNavigate()
  const {signIn}=useGlobalContext()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError('')
    try{
      await signIn(email, password)
      navigate('/')
    }
    catch(error){
      console.log(error)
      setError(error.message)
    }
  }

  return (
    <div className='w-full h-screen'>
      <img className='absolute w-full h-full object-cover' src='https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png'/>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-40'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
        <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              {error ? <p className='p-3 bg-red-300 my-2'>{error}</p> : null}
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='outline-none p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email'/>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='outline-none p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='current-password'/>
                <button type='submit' className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                <div className='flex justify-between text-sm text-gray-600'>
                  <p><input className='mr-2' type='checkbox'/>Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'><span className='text-gray-600'>New To Neatflix?</span>{' '}<Link to='/signUp'>Sign Up</Link></p>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn