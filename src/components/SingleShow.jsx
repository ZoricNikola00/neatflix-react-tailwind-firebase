import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { BsPlusCircle,BsPlusCircleFill } from 'react-icons/bs'
import { useGlobalContext } from '../context'
import { db } from '../firebase'
const img_path='https://image.tmdb.org/t/p/w500'

const SingleShow = ({id,title,backdrop_path,poster_path,overview,release_date}) => {
    const [like,setLike]=useState(false)
    const [show,setShow]=useState(false)
    const {user}=useGlobalContext()
    const showId=doc(db,'users',`${user?.email}`)

    const saveShow=async()=>{
        if(user?.email){
            setLike(p=>!p)
            await updateDoc(showId,{
                watchlist:arrayUnion({
                    id:id,
                    title:title,
                    img:poster_path,
                    bg:backdrop_path,
                    desc:overview,
                    date:release_date 
                })
            })
        }else{
            alert("You aren't logged in!")
        }
    }
    return  (
    <div onClick={_=>setShow(p=>!p)} onMouseEnter={_=>setShow(true)} onMouseLeave={_=>setShow(false)} className='w-[120px] md:w-[180px] lg:w-[290px] relative p-4 mx-auto z-40'>
        <div className={`flex items-center justify-center absolute top-0 left-0 h-full transition duration-500 w-full ${show && 'bg-black bg-opacity-[80%]'}`}>
            <h1 className={`${show?'opacity-1 translate-y-0':'opacity-0 translate-y-[50%]'} w-[80%] text-center text-lg md:text-xl font-bold  text-white transition duration-500`}>{title}</h1>
            <button onClick={saveShow} className={`${show?'opacity-1':'opacity-0'} absolute top-5 md:top-8 right-5 md:right-8  text-2xl transition duration-500 text-white z-50`}>{like?<BsPlusCircleFill/>:<BsPlusCircle/>}</button>
        </div>
        <img className='w-full object-contain rounded-lg'  src={img_path+poster_path}/>
    </div>
)}

export default SingleShow