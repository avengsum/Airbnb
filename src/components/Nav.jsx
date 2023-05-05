import logo from '../assets/logo.jfif'
import menu from '../assets/menu.png'
import user from '../assets/user.png'
import Cards from './Cards'

const Nav = () => {
    return (
        <div>
        <nav className='flex justify-between'>
        <div className='flex items-center'>
            <img src={logo} className='h-16' alt="logo" />
            <h1 className='text-xl text-red-600 font-bold'>airbnb</h1>    
        </div>
        <div className='flex items-center space-x-4'>
            <h1 className='font-semibold'
            >Airbnb your home</h1>
            <div className='flex w-[72px] h- gap-5 justify-center items-center rounded-[30px] bg-red-800'>
                <img src={menu} className='h-8' alt="menu" />
                <img src={user} className='h-8 rounded-xl' alt="user logo" />
            </div>
        </div>
        </nav>

        <div>
            <Cards />
        </div>
          

        </div>
    )
}

export default Nav