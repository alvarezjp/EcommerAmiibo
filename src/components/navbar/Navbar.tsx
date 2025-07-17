import logo from '../../assets/logo.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className=' px-10  flex flex-row justify-between' style={{background:" #0a79fb"}} >

      <div className=' text-center flex items-center text-white' >
        <Link to={"/"}>
          <img src={logo} alt="Imagen de logo" className=' w-18 cursor-pointer' />
        </Link>
        <p className='font-semibold'>Amiibo Commerce</p>
      </div>

      <div className=" flex justify-between items-center gap-6  ">
        <Link to={'/login'}>
          <PersonIcon sx={{ fontSize: 35 }} className="w-8 h-8 text-white cursor-pointer" />
        </Link>

        <Link to={"/carrito"}>
          <div className='w-fit relative cursor-pointer'>
            <p className='flex items-center justify-center w-5 h-5 text-xs
           rounded-full bg-red-600 text-white
           absolute -top-2 -right-2'>
              1
            </p>
            <ShoppingCartIcon sx={{ fontSize: 30 }} className=' text-white   ' />
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
