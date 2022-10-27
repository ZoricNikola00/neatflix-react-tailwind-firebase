import { useState, useEffect} from 'react';
import { doc,onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useGlobalContext } from '../context';

const SavedShows = () => {
    const {user}=useGlobalContext()
    const [show,setShow]=useState()
    const [shows,setShows]=useState()

    useEffect(()=>{
        onSnapshot(doc(db,'users',`${user?.email}`),(d)=>{
            setShows(d.data()?.SavedShows)
        })
    },[user?.email])

  return (
    <div className='p-4 relative'>
        <h1 className='text-2xl text-white font-bold'>My Shows</h1>
        <div className='flex flex-warp'>
            {shows?.map((show)=>{
                <SavedShow key={show.id} {...show}/>
            })}
        </div>
    </div>
  )
}

export default SavedShows