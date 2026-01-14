import ButtonActive from "../../components/ButtonActive"
import ButtonReset from "../../components/ButtonReset"
import trophy from '../../assets/images/trophy.gif'
import { useQuizStore } from "../../store/store"

const FinalScreen = () => {

       const score = useQuizStore((state) => state.score)
            const questions = useQuizStore((state) => state.questions)

            const answerRate = (score / questions.length) * 100

  return (
    <>
    <section className="  flex justify-center px-2 items-center h-screen ">

      {/* Tarjeta pricipal */}
      <section className="  w-full max-w-96 flex flex-col items-center py-10 mx-2 shadow-xl border border-border-card rounded-2xl ">
            <h1 className=" font-black text-2xl text ">¡Juego Terminado!</h1>
            <p className=" text-center text-color-text ">Haz completado el juego</p>
            <p className=" pt-12 font-extrabold text-6xl text-background-btn "> {answerRate}% </p>
            <p className=" p-5 text-color-text text-xs font-bold  ">Puntuacion: <span> {score} </span>/{questions.length} </p>
            {
                  (answerRate === 100) && 
                  <img src={trophy} alt="" className=" w-24 " />
            }
            <section className=" flex flex-col gap-4 pt-8 ">
                  <ButtonActive content="Jugar de nuevo"  />
                  <ButtonReset />
            </section>
      </section>

    </section>
    </>
  )
}

export default FinalScreen