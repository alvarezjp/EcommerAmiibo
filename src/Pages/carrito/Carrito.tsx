import { DropDownCart } from '../../components/dropDownCart/DropDownCart';


export const Carrito = () => {
  

  return (
    <section className="bg-principal h-screen grid grid-cols-12">

      <article className="bg-amber-400 col-start-2 col-span-10 rounded-2xl">
     <DropDownCart variant="cartPage" />
      
      </article>


      <article className="bg-blanco col-start-7 col-span-4 rounded-2xl text-3xl">Este viene despues</article>


    </section>
  )
}
