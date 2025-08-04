// import type { ProductCartInterface } from '@/type'
// import { type AppDispatch, type RootState } from '../../redux/Store/index'
// import { useDispatch, useSelector } from "react-redux"
// import { addToCart, removeToCart } from '../../redux/Products/Products.slice'
// import { Link } from 'react-router'

// export const DropDownCart = () => {
//     const cartProduct = useSelector<RootState, ProductCartInterface[]>((state) => state.SliceProduct.cartProduct)
//     const dispatch = useDispatch<AppDispatch>();

//     type CartAction = 'add' | 'remove';
//     interface CartHandleProps {
//         product: ProductCartInterface,
//         action: CartAction;
//     }





//     const sendProductCart = ({ product, action }: CartHandleProps) => {
//         const productInfo = {
//             id: product.id,
//             name: product.name,
//             image: product.image,
//             gameSeries: product.gameSeries,
//             prise: product.prise,
//             quantity: 1
//         };

//         if (action === 'add') {
//             dispatch(addToCart(productInfo))
//         } else if (action === 'remove') {
//             dispatch(removeToCart(productInfo))
//         }
//     }

//     const priceProduct = (product: ProductCartInterface) => {
//         return product.prise * product.quantity
//     }

//     const totalPrice = cartProduct.reduce((acc, product) => {
//         return acc + product.prise * product.quantity;
//     }, 0)





//     return (
//         <>
//             <section className="absolute top-19 z-50 right-0 w-4/10 max-h-[300px] overflow-y-auto
//      backdrop-blur-md bg-white/30 border border-white/20 rounded-xl shadow-lg p-4 space-y-3">

//                 <h2 className="text-xl font-semibold border-b pb-2">Productos agregados</h2>

//                 {cartProduct?.map((product) => (
//                     <div key={product.id} className="flex justify-between items-center border-b pb-2 gap-2">

//                         {/* Nombre del producto con anchura fija o truncado */}
//                         <div className="flex w-2/6 ">
//                             <p className="text-gray-800 font-medium truncate">{product.name}</p>
//                         </div>

//                         {/* Controles de cantidad */}
//                         <div className="flex  items-center gap-2">
//                             <button
//                                 className="w-6 h-6 flex items-center justify-center rounded-full  text-white text-mg font-semibold cursor-pointer"
//                                 onClick={() => sendProductCart({ product, action: 'remove' })}
//                             >
//                                 –
//                             </button>
//                             <span className="text-gray-700 font-semibold">{product.quantity}</span>
//                             <button
//                                 className="w-6 h-6 flex items-center justify-center rounded-full  text-white text-mg font-semibold cursor-pointer"
//                                 onClick={() => sendProductCart({ product, action: 'add' })}
//                             >
//                                 +
//                             </button>
//                         </div>

//                         {/* Precio */}
//                         <div className="text-right font-bold min-w-[60px] text-gray-800 ">
//                             ${priceProduct(product)}
//                         </div>
//                     </div>
//                 ))}


//                 <div className='flex justify-end items-center gap-2'>
//                     <h2 className='font-bold text-xl '>Valor total:</h2>
//                     <p className='text-xl '>${totalPrice}</p>
//                 </div>
//                 {/* Botón Ver Carrito */}
//                 <div className="pt-1 text-center">
//                     <Link to={'/carrito'}>
//                         <button
//                             className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
//                         >
//                             Ver carrito
//                         </button>
//                     </Link>
//                 </div>
//             </section>


//         </>
//     )
// }


import type { ProductCartInterface } from '@/type'
import { type AppDispatch, type RootState } from '../../redux/Store/index'
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeToCart } from '../../redux/Products/Products.slice'
import { Link } from 'react-router'

type CartVariant = 'dropdown' | 'cartPage';

interface DropDownCartProps {
    variant?: CartVariant;
}

export const DropDownCart = ({ variant = 'dropdown' }: DropDownCartProps) => {

    const cartProduct = useSelector<RootState, ProductCartInterface[]>((state) => state.SliceProduct.cartProduct)
    const dispatch = useDispatch<AppDispatch>();

    type CartAction = 'add' | 'remove';

    interface CartHandleProps {
        product: ProductCartInterface;
        action: CartAction;
    }

    const sendProductCart = ({ product, action }: CartHandleProps) => {
        const productInfo = {
            id: product.id,
            name: product.name,
            image: product.image,
            gameSeries: product.gameSeries,
            prise: product.prise,
            quantity: 1
        };

        if (action === 'add') {
            dispatch(addToCart(productInfo))
        } else if (action === 'remove') {
            dispatch(removeToCart(productInfo))
        }
    }

    const priceProduct = (product: ProductCartInterface) => {
        return product.prise * product.quantity;
    }

    const totalPrice = cartProduct.reduce((acc, product) => {
        return acc + product.prise * product.quantity;
    }, 0);

    // 💡 Definir clases según variante
    const containerClass =
        variant === 'dropdown'
            ? 'absolute top-19 z-50 right-0 w-4/10 max-h-[300px] overflow-y-auto backdrop-blur-md bg-white/30 border border-white/20 rounded-xl shadow-lg p-4 space-y-3'
            : 'relative mx-auto w-full max-w-3xl p-6 bg-white rounded-xl shadow-lg space-y-5'; // estilo del carrito de la imagen

    const titleClass =
        variant === 'dropdown'
            ? 'text-xl font-semibold border-b pb-2'
            : 'text-3xl font-bold text-center border-b pb-4';

    const buttonClass =
        variant === 'dropdown'
            ? 'w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer'
            : 'w-full py-3 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer';

    const buttonText =
        variant === 'dropdown'
            ? 'Ver carrito'
            : 'Finalizar compra';

    const linkTo =
        variant === 'dropdown'
            ? '/carrito'
            : '/checkout'; // ejemplo, puedes ajustar la ruta real

    return (
        <>
            <section className={containerClass}>
                <h2 className={titleClass}>
                    {variant === 'dropdown' ? 'Productos agregados' : 'Carrito de compras'}
                </h2>

                {cartProduct?.map((product) => (
                    <div key={product.id} className="flex justify-between items-center border-b pb-2 gap-2">

                        {/* Imagen solo en carritoPage */}
                        {variant === 'cartPage' && (
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-contain" />
                        )}

                        {/* Nombre del producto */}
                        <div className="flex-1">
                            <p className="text-gray-800 font-medium truncate">{product.name}</p>
                        </div>

                        {/* Controles de cantidad */}
                        <div className="flex items-center gap-2">
                            <button
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white text-lg font-semibold cursor-pointer"
                                onClick={() => sendProductCart({ product, action: 'remove' })}
                            >
                                –
                            </button>
                            <span className="text-gray-700 font-semibold">{product.quantity}</span>
                            <button
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white text-lg font-semibold cursor-pointer"
                                onClick={() => sendProductCart({ product, action: 'add' })}
                            >
                                +
                            </button>
                        </div>

                        {/* Precio */}
                        <div className="text-right font-bold min-w-[60px] text-gray-800">
                            ${priceProduct(product)}
                        </div>
                    </div>
                ))}

                <div className='flex justify-end items-center gap-2'>
                    <h2 className='font-bold text-xl'>Valor total:</h2>
                    <p className='text-xl'>${totalPrice}</p>
                </div>

                {/* Botón */}
                <div className="pt-2 text-center">
                    <Link to={linkTo}>
                        <button className={buttonClass}>
                            {buttonText}
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
};
