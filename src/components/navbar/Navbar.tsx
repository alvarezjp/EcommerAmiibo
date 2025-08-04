import logo from '../../assets/logo.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router';
import { useState } from 'react';
import { DropDownCart } from '../dropDownCart/DropDownCart';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/Store';
import type { ProductCartInterface } from '@/type';

const Navbar = () => {
  const [touch, setTouch] = useState(true)
  const cartTouch = () => {
    setTouch(!touch);
    console.log(touch);
  }

  const productsCart = useSelector<RootState, ProductCartInterface[]>((state) => state.SliceProduct.cartProduct)
  const count = productsCart.length;

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
                {count ?
                  <p className='flex items-center justify-center w-5 h-5 text-xs
                                rounded-full bg-red-600 text-white
                                absolute -top-2 -right-2'>
                    {count}
                  </p> :
                  <></>
                }

                <ShoppingCartIcon sx={{ fontSize: 30 }} className=' text-white' />
              </> : <CloseIcon sx={{ fontSize: 30 }} className=' text-white font-bold' />}
        </div>
      </div>

      {/* Esto debo hacerlo un componente externo mas adelante */}

      {!touch ?
        // <DropDownCart />
        <DropDownCart variant="dropdown" />
        : <></>}
    </nav>
  )
}

export default Navbar
