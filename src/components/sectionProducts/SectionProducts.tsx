import type { ProductType } from "@/type";
import { Products } from "./products/Products"
import { useQuery } from "@tanstack/react-query";
import { getProducts } from"../../service";;

export const SectionProducts = () => {
  const { data } = useQuery<ProductType[]>({
    queryKey: ['getProducts'],
    queryFn: getProducts
  });

  return (
    <div className='w-full bg-[#0a79fb]'>
      <h2 className=" text-center text-7xl text-white font-Press_Start_2P font-bold  mb-20
      ">
        Productos
      </h2>

      <div className=" w-full h-full flex flex-wrap gap-8 justify-center
      overflow-hidden px-4 
      ">
        {data?.map((product) => (
          <Products product={product}/>
        ))
        }
      </div>
    </div>
  )
}
