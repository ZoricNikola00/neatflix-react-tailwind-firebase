import { createContext,useContext,useState,useEffect } from "react";
import { auth, db } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    } from 'firebase/auth'
import {setDoc,doc} from 'firebase/firestore'

const AppContext=createContext()

export const AppProvider=({children})=>{
    const [user,setUser]=useState()
    const [swtch,setSwtch]=useState(true)
    const [type,setType]=useState('movie')
    
    const handleSwitch=()=>{
        setSwtch(p=>!p)
    }

    const signUp=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db,'users',email),{
            watchlist:[]
        })
    }
    const signIn=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser)
         
        })
        return ()=>{
         unsubscribe( )
        } 
     },[])
     useEffect(()=>{
        swtch?setType('movie'):setType('tv')
     },[swtch])
    return <AppContext.Provider value={{type,swtch,handleSwitch,signUp,signIn,logOut,user}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

