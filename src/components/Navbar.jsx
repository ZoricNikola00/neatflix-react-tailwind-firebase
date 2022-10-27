import { Link ,useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../context'

const Navbar = () => {
    const {user,logOut}=useGlobalContext()
    const navigate=useNavigate()

    const handleLogout=async()=>{
        try{
            await logOut()
            navigate('/')            
        }catch(err){console.log(err)}
    }
  return (
    <nav className='w-full h-auto absolute top-0 left-0 flex justify-between p-4 z-50'>
        <Link to='/'><h1 className='cursor-pointer text-4xl font-bold uppercase text-blue-900'>Neatflix</h1></Link>
        {user?.email ? <div className='flex'>
            <Link to='/account'><button className='py-2 px-4  text-white text-sm sm:text-lg'>Account</button></Link>
            <Link to='/signup'><button onClick={handleLogout} className='py-2 px-4 bg-blue-900 text-sm sm:text-lg text-white rounded-lg'>Sign Out</button></Link>
        </div>
        :<div className='flex'>
            <Link to='/signin'><button className='py-2 px-4  text-white text-sm sm:text-lg'>Sign In</button></Link>
            <Link to='/signup'><button className='py-2 px-4 bg-blue-900 text-sm sm:text-lg text-white rounded-lg'>Sign Up</button></Link>
        </div>}
    </nav>
  )
}

export default Navbar