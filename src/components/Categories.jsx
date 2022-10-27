import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import Slider from 'react-slick'
import SingleShow from './SingleShow';
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa'


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            
          }
        },
          {
            breakpoint: 440,
            settings: {
              slidesToShow: 3,
              
            }
          },
    ]
  };
const moviesFetch=async(url)=>{
    const data=await axios.get(url)
    return data?.data?.results
}

const Categories = ({category,endpoint}) => {
    const {data:Movies,isLoading}=useQuery(['movie',category],()=>moviesFetch(endpoint),{refetchOnWindowFocus:false,refetchOnReconnect:false})
    const [slideRef,setSlideRef]=useState(null)
    const [show,setShow]=useState(false)

  return (
    <div className='p-4 relative'onMouseEnter={_=>setShow(true)} onMouseLeave={_=>setShow(false)}>
        <h1 className='text-white text-2xl font-bold'>{category}</h1>
        <Slider {...settings} ref={setSlideRef}>
        {Movies?.map((movie)=>{
          console.log(movie)
                return <SingleShow key={movie.id} {...movie}/>
            })}
        </Slider>
        <FaArrowCircleLeft  onClick={slideRef?.slickPrev} className={`${show?'opacity-80':'opacity-0'} transition-opacity duration-500 text-white rounded-full absolute top-[50%] left-5 text-2xl md:text-4xl lg:text-5xl cursor-pointer  z-20`}/>
        <FaArrowCircleRight onClick={slideRef?.slickNext} className={`${show?'opacity-80':'opacity-0'} transition-opacity duration-500 text-white rounded-full absolute top-[50%] right-5 text-2xl md:text-4xl lg:text-5xl cursor-pointer z-20`}/>
    </div>
  )
}

export default Categories