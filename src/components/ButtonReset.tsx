import { useQuizStore } from "../store/store"

const ButtonReset = () => {
     

      const resetStatus = useQuizStore((state) => state.resetQuiz)


  return (
     <>
                  <button className=" py-1.5 px-10 rounded-2xl font-black border border-border-card shadow-lg md:text-lg md:hover:scale-105 md:hover:bg-gray-200 md:transition-all md:duration-300 lg:cursor-pointer " onClick={resetStatus} > Volver al inicio </button>
            </>
  )
}

export default ButtonReset