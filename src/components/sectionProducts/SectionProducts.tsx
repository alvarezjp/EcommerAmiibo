import { Products } from "./products/Products"

export const SectionProducts = () => {
  return (
    <div className='w-full'>
      <h2>Productos</h2>

      <div className=" w-full h-full flex flex-wrap gap-8 justify-center
      overflow-hidden px-4
      
      ">
        <Products />
      </div>
    </div>
  )
}
