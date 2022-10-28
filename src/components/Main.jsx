import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useGlobalContext } from '../context'
import ReactLoading from 'react-loading';

const img_path='https://image.tmdb.org/t/p/original'

const movieFetch=async(type)=>{
    const data= await axios.get(`https://api.themoviedb.org/3/discover/${type}?sort_by=popularity.desc&api_key=72de8895bb64376912ef844faac64a10&page=1`)
    const movies = data?.data?.results
    return movies[Math.floor(Math.random()*movies.length)]
}

const Main = () => {
    const {type}=useGlobalContext()
    const {data,isLoading,isFetching}=useQuery(['show',type],()=>movieFetch(type),({refetchOnWindowFocus:false}))
    const textSlice=(text,num)=>{
        if(text?.length>num){
            return text.slice(0,num)+'...'
        }
        return text
    }
    if(isLoading || isFetching){
        return <div className='w-full h-[540px] flex justify-center items-center'><ReactLoading type='cylon' width={200}/></div>
    }
    const title = type==='tv'?data?.name:data?.title
    const date = type==='tv'?data?.first_air_date:data?.release_date 
  return (
    <div className='w-full h-[540px] relative'>
        {}
        <div className='w-full h-full'>
            <div className='w-full h-[540px] absolute bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={img_path+data?.backdrop_path}/>
        </div>
        <div className='absolute top-[40%] p-4 w-[90%] md:w-[60%] lg:w-[40%]'>
        <h1 className='text-white text-2xl font-bold'>{title}</h1>
            <div className='my-2'>
                <button className='p-2 px-6 bg-white border-white border-2 mr-4 '>Play</button>
                <button className='p-2 px-6 bg-transparent text-white border-white border-2'>Watch Later</button>
            </div>
            <p className='text-gray-500'>{date}</p>
            <p className='text-white'>{textSlice(data?.overview,150)}</p>
        </div>
    </div>
  )
}

export default Main