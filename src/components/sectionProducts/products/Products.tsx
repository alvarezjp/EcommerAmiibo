import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../service";




export const Products = () => {

  const { data } = useQuery({
    queryKey: ['getProducts'],
    queryFn: getProducts
  });

  return (
    <>
      {data?.map((product, index) => (

        <div className="border-2 h-[500px] w-[400px] flex flex-col " 
        key={index}>
          <div className="w-full basis-6/8 overflow-hidden">
            <img src={product.image} alt={`imagen del producto: ${product.name}`}
              className="border-2 border-red-600 
            w-full h-full rounded-3xl
            "/>
          </div>
          <div className="basis-2/8 border-2 border-blue-600">

            <p className="font-bold text-lg">{product.name}</p>
            <p className="text-gray-500 text-2xl font-semibold ">$ {product.price}</p>
            <button className="bg-blue-500  w-full round-2xl p-1
            text-white font-bold text-lg
            ">
              Agregar al carro
            </button>
          </div>
        </div>

      ))}

    </>
  )
}
