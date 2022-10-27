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
    return <AppContext.Provider value={{signUp,signIn,logOut,user}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

