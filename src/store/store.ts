import { create } from 'zustand'
import { natureQuestions } from '../data/questions';




export type QuizStatus = 'inactive' | 'playing' | 'finished'

export interface Question {
      id: number;
      question: string;
      options: string[];
      correctAnswer: string
}

export interface statusStore {
      status: QuizStatus
      startQuiz: () => void,
      resetQuiz: () => void,
      questions: Question[],
      currentQuestionIndex: number
      score: number
      userAnswers: Record<number, string>
      selectAnswer: (questionId: number, answer: string) => void,
      nextQuestion: () => void,
      
}

export const useQuizStore = create<statusStore>((set) => ({
      status: "inactive",
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      userAnswers: {},
      startQuiz: () => {
            set(() => ({
                  status: 'playing',
                  questions: natureQuestions,
                  currentQuestionIndex: 0,
                  score: 0,
                  userAnswers: {}
            }))
      },
      resetQuiz: () => {
            set(() => ({
                  status: 'inactive',
                  questions: natureQuestions,
                  currentQuestionIndex: 0,
                  score: 0,
                  userAnswers: {}
            }))
      },

      selectAnswer(questionId, answer) {
            set((state) => {
                  if (state.userAnswers[questionId]) return state;

                  const question = state.questions.find(q => q.id === questionId)
                  const isCorrect = question?.correctAnswer === answer;

                  return {
                        userAnswers: {
                              ...state.userAnswers,
                              [questionId]: answer // Guardamos la respuesta: { 1: "useEffect" }
                        },
                        score: isCorrect ? state.score + 1 : state.score
                  };
            })
      },
      nextQuestion() {
            set((state) => {
                  if (state.currentQuestionIndex < state.questions.length - 1) {
                        return {
                              currentQuestionIndex: state.currentQuestionIndex + 1
                        }
                  }

                  return { status: 'finished' };
            })
      },
}))
