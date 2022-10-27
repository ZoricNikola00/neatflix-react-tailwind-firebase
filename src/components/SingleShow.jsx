import { useState } from 'react'
import { BsHeart,BsHeartFill } from 'react-icons/bs'
const img_path='https://image.tmdb.org/t/p/w500'

const SingleShow = ({id,title,backdrop_path,poster_path,overview,release_date}) => {
    const [like,setLike]=useState(false)
    const [show,setShow]=useState(false)

    return  (
    <div onMouseEnter={_=>setShow(true)} onMouseLeave={_=>setShow(false)} className='w-[120px] md:w-[180px] lg:w-[290px] relative p-4 mx-auto'>
        <div className={`flex items-center justify-center absolute top-0 left-0 h-full transition duration-500 w-full ${show && 'bg-black bg-opacity-[80%]'}`}>
            <h1 className={`${show?'opacity-1 translate-y-0':'opacity-0 translate-y-[50%]'} w-[80%] text-center text-lg md:text-xl font-bold  text-white transition duration-500`}>{title}</h1>
            <button className={`${show?'opacity-1':'opacity-0'} absolute top-5 md:top-8 right-5 md:right-8  text-2xl transition duration-500 text-white`}>{like?<BsHeartFill/>:<BsHeart/>}</button>
        </div>
        <img className='w-full object-contain rounded-lg'  src={img_path+poster_path}/>
    </div>
)}

export default SingleShow