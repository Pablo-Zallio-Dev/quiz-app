import FinalScreen from "./features/quiz/FinalScreen"
import QuizCard from "./features/quiz/QuizCard"
import StartScreen from "./features/quiz/StartScreen"
import { useQuizStore } from "./store/store"

function App() {

      const status = useQuizStore((state) => state.status)

      console.log(status)

  return (
    <>
    { status === 'inactive' && <StartScreen /> }
    { status === 'playing' && <QuizCard /> }
    { status === 'finished' && <FinalScreen /> }
    
    </>
  )
}

export default App
