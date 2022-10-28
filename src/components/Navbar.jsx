import { Link ,useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../context'
import {AiOutlineMenu, AiOutlineBars} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
    const {user,logOut,handleSwitch,swtch}=useGlobalContext()
    const [showMenu,setShowMenu]=useState(false)
    const navigate=useNavigate()

    const handleLogout=async()=>{
        try{
            await logOut()
            navigate('/')            
        }catch(err){console.log(err)}
    }
    
  return (
    <nav className='w-full h-auto absolute top-0 left-0 flex justify-between p-4 z-50'>
        <Link className='z-40' to='/'><h1 className=' cursor-pointer text-4xl font-bold uppercase text-blue-900'>Neatflix</h1></Link>
        <div className='rounded-lg overflow-hidden w-[150px] h-[50px] md:flex hidden justify-between items-center px-3 border-2 border-white relative'>
            <span className='text-white'>TV</span>
            <span className='text-white'>MOVIE</span>
            <div onClick={handleSwitch} className={`absolute left-0 transition-transform ${swtch?'translate-x-[0]' : ' translate-x-[96%]'} cursor-pointer w-[75px] h-full bg-blue-900 flex justify-center items-center`}><AiOutlineMenu className='text-xl text-white rotate-90'/></div>
        </div>
        {user?.email ? <div className='md:flex hidden'>
            <Link to='/account'><button className='py-2 px-4  text-white text-sm sm:text-lg'>Account</button></Link>
            <Link to='/signup'><button onClick={handleLogout} className='py-2 px-4 bg-blue-900 text-sm sm:text-lg text-white rounded-lg'>Sign Out</button></Link>
        </div>
        :<div className='md:flex hidden'>
            <Link to='/signin'><button className='py-2 px-4  text-white text-sm sm:text-lg'>Sign In</button></Link>
            <Link to='/signup'><button className='py-2 px-4 bg-blue-900 text-sm sm:text-lg text-white rounded-lg'>Sign Up</button></Link>
        </div>}


        <div className='z-40 text-2xl block md:hidden text-white bg-blue-900 rounded-[50%] p-2 cursor-pointer' onClick={_=>setShowMenu(p=>!p)}><AiOutlineBars/></div>
        <div className={`z-30 fixed left-0 top-0 w-full h-[100%] transition-transform duration-500 ${showMenu?'translate-y-0':'translate-y-[-100%]'} bg-black flex flex-col justify-start items-center py-[100px]`}>
        <div className='rounded-lg overflow-hidden w-[150px] h-[50px] flex md:hidden justify-between items-center px-3 border-2 my-2 border-white relative'>
            <span className='text-white'>TV</span>
            <span className='text-white'>MOVIE</span>
            <div onClick={handleSwitch} className={`absolute left-0 transition-transform ${swtch?'translate-x-[0]' : ' translate-x-[96%]'} cursor-pointer w-[75px] h-full bg-blue-900 flex justify-center items-center`}><AiOutlineMenu className='text-xl text-white rotate-90'/></div>
        </div>
        {user?.email ? <div className='flex flex-col md:hidden w-full text-center'>
            <Link onClick={_=>setShowMenu(false)} to='/account'><button className='py-2 px-4 text-black bg-white rounded-lg w-[80%] my-2 text-lg'>Account</button></Link>
            <Link onClick={_=>setShowMenu(false)} to='/signup'><button onClick={handleLogout} className='py-2 px-4 bg-blue-900 w-[80%] my-2 text-lg text-white rounded-lg'>Sign Out</button></Link>
        </div>
        :<div className='flex flex-col md:hidden w-full text-center'>
            <Link onClick={_=>setShowMenu(false)} to='/signin'><button className='py-2 px-4 text-black bg-white text-lg w-[80%] rounded-lg my-2'>Sign In</button></Link>
            <Link onClick={_=>setShowMenu(false)} to='/signup'><button className='py-2 px-4 bg-blue-900 text-lg text-white w-[80%] rounded-lg my-2'>Sign Up</button></Link>
        </div>}
        </div>
    </nav>
  )
}

export default Navbar