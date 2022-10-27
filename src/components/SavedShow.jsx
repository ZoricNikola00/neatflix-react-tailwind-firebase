import {AiOutlineClose} from 'react-icons/ai'
import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { db } from '../firebase'
const img_path='https://image.tmdb.org/t/p/original'

const SavedShow = ({id,img,title,bg,desc,date,shows}) => {
    const [show,setShow]=useState(false)
    const [showModal,setShowModal]=useState(false)
    const {user}=useGlobalContext()

    const showRef=doc(db,'users',`${user?.email}`)

    const deleteShow=async(id)=>{
        try{
            const newWatchlist=shows?.filter(x=>x.id!==id)
            await updateDoc(showRef,{
                watchlist:newWatchlist
            })
        }catch(err){console.log(err)}
    }

    window.addEventListener('click',(e)=>{
        if(e.target.dataset.attribute==='modal'){
            setShowModal(false)
        }
    })


  return (
    <div onClick={_=>setShowModal(true)} onMouseEnter={_=>setShow(true)} onMouseLeave={_=>setShow(false)} className='w-[250px] rounded-lg m-4 shadow-sm shadow-white overflow-hidden relative'>
        <img className='w-full' src={img_path+img}/>
        <div className={`flex items-center justify-center absolute top-0 left-0 h-full transition duration-500 w-full ${show && 'bg-black bg-opacity-[80%]'}`}>
            <h1 className={`${show?'opacity-1 translate-y-0':'opacity-0 translate-y-[50%]'} w-[80%] text-center text-lg md:text-xl font-bold  text-white transition duration-500`}>{title}</h1>
            <AiOutlineClose onClick={_=>deleteShow(id)} className={`text-white text-3xl absolute top-3 right-3 transition-opacity duration-500 cursor-pointer ${show? 'opacity-1':'opacity-0'}`}/>
        </div>
        <div data-attribute='modal' className={`flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black/60 transition-opacity duration-500 ${showModal?'opacity-100 z-50':'opacity-0 -z-50'}`}>
            <div className={`relative w-[90%] md:w-[80%] lg:w-[70%] h-[500px] rounded-lg overflow-hidden transition-transform duration-500 ${showModal?'translate-y-[0%] opacity-100':' opacity-0 translate-y-[-100%]'}`}>
                <img className='w-full h-full object-cover' src={img_path+bg}/>
                <div className='absolute top-0 left-0 w-full h-full bg-black/50'></div>
                <AiOutlineClose onClick={_=>deleteShow(id)} className={`text-white text-3xl absolute top-3 right-3 transition-opacity duration-500 cursor-pointer ${show? 'opacity-1':'opacity-0'}`}/>
                <div className='absolute text-white top-0 left-0 p-4 w-[90%] md:w-[70%]'>
                    <h1 className='font-bold text-xl lg:text-4xl'>{title}</h1>
                    <p className='text-gray-400 text-sm my-2'>{date}</p>
                    <p className='text-sm md:text-lg my-2'>{desc}</p>
                    <button className='p-2 px-6 bg-transparent border-white border-2 mr-4 '>Play</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SavedShow
