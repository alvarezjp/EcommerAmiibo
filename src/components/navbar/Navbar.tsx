import logo from '../../assets/logo.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router';
import { useState } from 'react';

const Navbar = () => {
  const [touch, setTouch] = useState(true)
  const cartTouch = () => {
    setTouch(!touch);
    console.log(touch);
  }

  return (
    <nav className=' px-10  flex flex-row justify-between  relative overflow-visible'
      style={{ background: " #0a79fb" }} >

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


        <div className='w-fit relative cursor-pointer' onClick={() => cartTouch()}>
          {
            touch ?
              <>

                <p className='flex items-center justify-center w-5 h-5 text-xs
           rounded-full bg-red-600 text-white
           absolute -top-2 -right-2'>
                  1
                </p>

                <ShoppingCartIcon sx={{ fontSize: 30 }} className=' text-white' />
              </> : <CloseIcon sx={{ fontSize: 30 }} className=' text-white font-bold'/>}
        </div>
      </div>

      {/* Esto debo hacerlo un componente externo mas adelante */}

      {!touch ?
        <div className='absolute 
        top-19 z-50 right-0 w-4/10 h-[150px]
        backdrop-blur-md bg-white/30 border border-white/20 rounded-xl shadow-lg p-4'>
          <h2 className="text-xl font-semibold border-b pb-2">Productos agregados</h2>
          <div className="flex justify-between items-center border-b py-2">
            <div className="text-gray-800 font-medium">Mochila Negra</div>
            <div className="text-gray-600">x1</div>
            <div className="text-right font-semibold ">$29.99</div>
          </div>
        </div>
        : <></>}
    </nav>
  )
}

export default Navbar
