import { useQuizStore } from "../store/store"

type buttonProps = {
      content?: string
}
const ButtonActive = ( { content }: buttonProps ) => {

      const changeStatus = useQuizStore((state) => state.startQuiz)


      return (
            <>
                  <button className=" py-1.5 px-10 rounded-2xl bg-background-btn font-black text-text-light shadow-lg md:text-lg md:hover:scale-105 md:hover:bg-background-btn-hover md:transition-all md:duration-300 lg:cursor-pointer " onClick={changeStatus} > {content} </button>
            </>
      )
}
            
export default ButtonActive