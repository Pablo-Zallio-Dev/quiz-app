import { useEffect } from "react";
import { useQuizStore } from "../../store/store";

const QuizCard = () => {
  const currentCuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const score = useQuizStore((state) => state.score);
  const questions = useQuizStore((state) => state.questions);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const userAnswer = useQuizStore((state) => state.userAnswers);
  const currentQuestion = useQuizStore(
    (state) => state.questions[state.currentQuestionIndex]
  );
  const selectAnswer = useQuizStore((state) => state.selectAnswer);

  const width = ((currentCuestionIndex + 1) / questions.length) * 100;

  console.log(userAnswer[currentQuestion.id]);

  useEffect(() => {
    if (userAnswer[currentQuestion.id] === undefined) return;

    const answerResponse = setTimeout(() => {
      nextQuestion();
    }, 2000);

    return () => clearTimeout(answerResponse);
  }, [userAnswer, nextQuestion, currentQuestion.id]);

  return (
    <>
      {/* Contenedor principal */}
      <section className=" flex justify-center items-center w-full h-screen px-6  ">
        {/* Tarjeta de preguntas */}
        <section className=" w-full max-w-160 border border-border-card rounded-2xl shadow-lg ">
          {/* cantidad de preguntas y aciertos */}
          <section className=" flex justify-between ">
            <p className=" p-5 text-color-text text-xs font-bold  ">
              Pregunta <span> {currentCuestionIndex + 1} </span> de 5{" "}
            </p>
            <p className=" p-5 text-color-text text-xs font-bold  ">
              Puntuacion: <span> {score} </span>/{questions.length}{" "}
            </p>
          </section>

          {/* barra de progreso */}
          <section className=" w-full  ">
            <section
              style={{ width: `${width}%` }}
              className={`  h-1 bg-background-btn transition-all duration-300 `}
            ></section>
          </section>

          <section className=" flex flex-col justify-center p-6 ">
            <p className=" p-2  text-base md:text-lg lg:text-2xl font-extrabold  ">
              {currentQuestion?.question}
            </p>

            {/* respuestas */}
            <section className=" flex flex-col gap-4 py-4 lg:py-8 ">
              {currentQuestion?.options.map((answer) => (
                <button
                  key={answer}
                  className={` p-3 pl-6 text-start text-xs md:text-lg font-bold rounded-2xl border border-border-card md:cursor-pointer hover:scale-103  hover:border-background-btn transition-all duration-200  
                                                                              ${
                                                                                userAnswer[
                                                                                  currentQuestion
                                                                                    .id
                                                                                ] ===
                                                                                undefined
                                                                                  ? "  "
                                                                                  : `${
                                                                                      answer ===
                                                                                      currentQuestion.correctAnswer
                                                                                        ? "bg-green-500/20 border-green-700 hover:border-green-700 scale-100 hover:scale-none hover:cursor-auto "
                                                                                        : `${
                                                                                            userAnswer[
                                                                                              currentQuestion
                                                                                                .id
                                                                                            ] ===
                                                                                            answer
                                                                                              ? "bg-red-500/20 border-red-700 hover:border-red-700 hover:scale-none hover:cursor-auto "
                                                                                              : " disabled:cursor-auto disabled:hover:scale-100 disabled:hover:border-border-card disabled:opacity-40  "
                                                                                          } `
                                                                                    }`
                                                                              }  `}
                  onClick={() => {
                    selectAnswer(currentQuestion.id, answer);
                  }}
                  disabled={userAnswer[currentQuestion.id] !== undefined}
                >
                  {" "}
                  {answer}{" "}
                </button>
              ))}
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default QuizCard;
