import ButtonActive from "../../components/ButtonActive"

const startScreen = () => {
  return (
    <>
      {/* Contenedor principal */}
      <section className=" flex flex-col justify-center items-center gap-5 w-full h-screen border ">
            <h1 className=" font-black text-4xl md:text-5xl lg:text-6xl ">Trivial Quiz</h1>
            <p className=" max-w-140 px-7 md:px-2 mb-10 text-font-text text-center md:text-lg   ">Pon a prueba tus conocimientos con preguntas de cultura general. ¿Estás listo para el desafío?</p>
      <ButtonActive content="¡Comienza!" />
      </section>
    </>
  )
}

export default startScreen