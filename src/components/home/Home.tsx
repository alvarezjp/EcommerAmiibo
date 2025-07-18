import { SectionProducts } from "../sectionProducts/SectionProducts"

export const Home = () => {
  return (
    < >
      <section className="flex flex-col ">
        <article className="
        bg-[url('/hero.png')] bg-cover bg-center
         flex h-screen relative
        ">
          <h2 className="
          text-white text-4xl absolute top-2/10 left-2/30
          px-14 font-Press_Start_2P font-bold
          ">
            Super Oferta Flash
            <span className="text-yellow-400 font-bold"> 50% off</span>
          </h2>
        </article>
        <article className="flex-1">
          <div>
            <SectionProducts />
          </div>
        </article>
      </section>
    </>
  )
}