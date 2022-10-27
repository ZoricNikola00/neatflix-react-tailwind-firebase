import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

const SignUp = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const {signUp}=useGlobalContext()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      await signUp(email, password)
      navigate('/')
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png'/>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-40'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input className='outline-none p-3 my-2 bg-gray-700 rounded' onChange={(e)=>setEmail(e.target.value)} value={email} type='email' placeholder='Email' autoComplete='email'/>
                <input className='outline-none p-3 my-2 bg-gray-700 rounded' onChange={(e)=>setPassword(e.target.value)} value={password} type='password' placeholder='Password' autoComplete='current-password'/>
                <button type='submit' className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div className='flex justify-between text-sm text-gray-600'>
                  <p><input className='mr-2' type='checkbox'/>Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'><span className='text-gray-600'>Already subscribe to Neatflix</span>{' '}<Link to='/login'>Sign In</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp