import { Products } from "./products/Products"

export const SectionProducts = () => {
  return (
    <div className='w-full bg-[#0a79fb]'>
      <h2 className=" text-center text-7xl text-white font-Press_Start_2P font-bold  mb-20
      ">
        Productos
        </h2>

      <div className=" w-full h-full flex flex-wrap gap-8 justify-center
      overflow-hidden px-4 
      ">
        <Products />
      </div>
    </div>
  )
}
