// import { useQuery } from "@tanstack/react-query";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../../service";
import type { ProductCartInterface, ProductType } from "../../../type";
import type { AppDispatch, RootState } from "@/redux/Store";
// import { addToCart } from "../../../redux/Products/index";



export interface ProductsProps {
  product:ProductType
}

export const Products = ({product}:ProductsProps) => {

  

// const viewProduct = useSelector<RootState>((state) => state.SliceProduct.cartProduct )
//   const dispatch = useDispatch<AppDispatch>();

  // const handleAddCart = (product:ProductType) => { --- Seguir de aca
  //   const sendProductCart:ProductCartInterface = {
  //     id:product.id,
  //     name:product.name,
  //     image:product.image,
  //     gameSeries:product.gameSeries,
  //     prise:product.price,
  //     quantity:1
  //   }

  //   dispatch(addToCart(sendProductCart))
  //   console.log(viewProduct);
    
  // }
  

  return (
    <>
      
        
        <div className=" h-[450px] w-[300px] 
        flex flex-col justify-end overflow-hidden 
        "key={product.id}>

          <div className=" w-full h-[150px] 
          flex justify-center bg-[#eaf4ff] rounded-t-4xl 
          ">
            <img src={product.image} alt={`imagen del producto: ${product.name}`}
              className=" 
             rounded-3xl h-[300px] -translate-y-36
            "/>
          </div>

          <div className="
           bg-[#eaf4ff] h-[150px] flex flex-col gap-4 items-center rounded-b-4xl 
          ">
            <div className="px-2 pt-4 flex flex-col gap-1 bg-[#eaf4ff] w-7/8">
              <p className="font-semibold text-xl text-[#053c91] truncate ">{product.name}</p>
              <p className="text-[#5a5a5a] italic text-2xl font-semibold ">$ {product.price}</p>
            </div>

            <button className="bg-[#0a79fb] hover:bg-[#075ccc] text-white font-bold text-lg
             w-7/8 rounded-full p-1 cursor-pointer"
            >
              Agregar al carro
            </button>
          </div>
        </div>
     

    </>
  )
}
