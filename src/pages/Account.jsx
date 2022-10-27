import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
        <div className='w-full text-white relative'>
            <img className='w-full h-[400px] object-cover' src='https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png'/>
            <div className='absolute w-full h-full bg-black/60 top-0 left-0'></div>
            <h1 className='absolute top-[20%] text-3xl md:text-5xl font-bold p-4 md:p-8'>My Shows</h1>
        </div>
            <SavedShows/>
    </>
    
  )
}

export default Account