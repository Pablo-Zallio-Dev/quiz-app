import type { Question } from "../store/store"; // Ajusta la ruta si es necesario
 // Ajusta la ruta si es necesario

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "¿Qué hook de React se utiliza para manejar efectos secundarios como llamadas a APIs?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: "useEffect",
  },
  {
    id: 2,
    question: "¿Cuál es la principal ventaja de usar TypeScript sobre JavaScript?",
    options: [
      "Hace que el código se ejecute más rápido",
      "Permite usar CSS dentro de los archivos JS",
      "Proporciona tipado estático para detectar errores en desarrollo",
      "No requiere compilación",
    ],
    correctAnswer: "Proporciona tipado estático para detectar errores en desarrollo",
  },
  {
    id: 3,
    question: "En Zustand, ¿cuál es la función que se usa para actualizar el estado?",
    options: ["update", "change", "set", "dispatch"],
    correctAnswer: "set",
  },
  {
    id: 4,
    question: "¿Qué propiedad de CSS se usa en Tailwind para controlar el espaciado interno?",
    options: ["m-", "p-", "space-", "gap-"],
    correctAnswer: "p-",
  },
  {
    id: 5,
    question: "¿Cómo se pasan datos de un componente padre a un hijo en React?",
    options: ["Mediante States", "Mediante Props", "Mediante Effects", "Mediante Reducers"],
    correctAnswer: "Mediante Props",
  },
];

export const natureQuestions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es el océano más grande de la Tierra?",
    options: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
    correctAnswer: "Océano Pacífico"
  },
  {
    id: 2,
    question: "¿Qué proceso realizan las plantas para fabricar su propio alimento?",
    options: ["Respiración", "Fotosíntesis", "Transpiración", "Combustión"],
    correctAnswer: "Fotosíntesis"
  },
  {
    id: 3,
    question: "¿Cuál es el animal terrestre más rápido del mundo?",
    options: ["León", "Guepardo", "Tigre", "Antílope"],
    correctAnswer: "Guepardo"
  },
  {
    id: 4,
    question: "¿En qué continente se encuentra el desierto del Sahara?",
    options: ["Asia", "América", "África", "Oceanía"],
    correctAnswer: "África"
  },
  {
    id: 5,
    question: "¿Cuál es el gas que las plantas absorben de la atmósfera?",
    options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"],
    correctAnswer: "Dióxido de carbono"
  },
  {
    id: 6,
    question: "¿Cómo se llama el fenómeno de desplazamiento de grandes masas de hielo?",
    options: ["Erosión", "Glaciación", "Alud", "Tectónica"],
    correctAnswer: "Glaciación"
  },
  {
    id: 7,
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Nilo", "Amazonas", "Misisipi", "Yangtsé"],
    correctAnswer: "Amazonas"
  },
  {
    id: 8,
    question: "¿Qué tipo de animal es la ballena azul?",
    options: ["Pez", "Anfibio", "Reptil", "Mamífero"],
    correctAnswer: "Mamífero"
  },
  {
    id: 9,
    question: "¿Cuál es el lugar más seco de la Tierra?",
    options: ["Desierto del Sahara", "Desierto de Atacama", "Valle de la Muerte", "Gobi"],
    correctAnswer: "Desierto de Atacama"
  },
  {
    id: 10,
    question: "¿Qué nombre recibe el centro de la Tierra?",
    options: ["Manto", "Corteza", "Núcleo", "Litósfera"],
    correctAnswer: "Núcleo"
  }
];