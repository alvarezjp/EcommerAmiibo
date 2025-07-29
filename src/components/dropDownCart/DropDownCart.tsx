import type { ProductCartInterface } from '@/type'
import { type AppDispatch, type RootState } from '../../redux/Store/index'
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeToCart } from '../../redux/Products/Products.slice'

export const DropDownCart = () => {
    const cartProduct = useSelector<RootState, ProductCartInterface[]>((state) => state.SliceProduct.cartProduct)
    const dispatch = useDispatch<AppDispatch>();

    type CartAction = 'add' | 'remove';
    interface CartHandleProps{
        product:ProductCartInterface,
        action:CartAction;
    }

    

const sendProductCart = ({product , action}:CartHandleProps) => {
  const productInfo = {
    id: product.id,
    name: product.name,
    image: product.image,
    gameSeries: product.gameSeries,
    prise: product.prise,
    quantity: 1
  };

  if(action==='add'){
      dispatch(addToCart(productInfo)) 
  }else if( action === 'remove'){
      dispatch(removeToCart(productInfo)) 
  }


 


}



    return (
        <>
           <div className="absolute top-19 z-50 right-0 w-4/10 max-h-[300px] overflow-y-auto
     backdrop-blur-md bg-white/30 border border-white/20 rounded-xl shadow-lg p-4 space-y-3">

                <h2 className="text-xl font-semibold border-b pb-2">Productos agregados</h2>

                {cartProduct?.map((product) => (
                    <div key={product.id} className="flex justify-between items-center border-b pb-2 gap-2">

                        {/* Nombre del producto con anchura fija o truncado */}
                        <div className="flex w-2/6 ">
                            <p className="text-gray-800 font-medium truncate">{product.name}</p>
                        </div>

                        {/* Controles de cantidad */}
                        <div className="flex  items-center gap-2">
                            <button
                                className="w-6 h-6 flex items-center justify-center rounded-full  text-white text-mg font-semibold cursor-pointer"
                                onClick={() => sendProductCart({product,action:'remove'})}
                            >
                                –
                            </button> 
                            <span className="text-gray-700 font-semibold">{product.quantity}</span>
                            <button
                                className="w-6 h-6 flex items-center justify-center rounded-full  text-white text-mg font-semibold cursor-pointer"
                                onClick={() => sendProductCart({product,action:'add'})}
                            >
                                +
                            </button>
                        </div>

                        {/* Precio */}
                        <div className="text-right font-bold min-w-[60px] text-gray-800 ">
                            ${product.prise.toFixed(2)}
                        </div>
                    </div>
                ))}

                {/* Botón Ver Carrito */}
                <div className="pt-4 text-center">
                    <button
                        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
                    >
                        Ver carrito
                    </button>
                </div>
            </div>


        </>
    )
}
