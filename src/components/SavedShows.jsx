import { useState, useEffect} from 'react';
import { doc,onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useGlobalContext } from '../context';
import SavedShow from './SavedShow';

const SavedShows = () => {
    const {user}=useGlobalContext()
    const [show,setShow]=useState()
    const [shows,setShows]=useState()

    useEffect(()=>{
        onSnapshot(doc(db,'users',`${user?.email}`),(d)=>{
            setShows(d.data()?.watchlist)
        })
    },[user?.email])

  return (
    <div className='p-4 relative'>
        <h1 className='text-2xl text-white font-bold'>My Shows</h1>
        <div className='flex flex-wrap justify-center'>
            {shows?.map((show)=>{
                console.log(show)
               return <SavedShow key={show.id} {...show} shows={shows}/>
            })}
        </div>
    </div>
  )
}

export default SavedShows