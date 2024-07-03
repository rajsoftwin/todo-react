import { combineReducers } from 'redux';
import { SELECT_QUIZ, ANSWER_QUESTION } from '../actions/action';

const initialState = {
  quizzes: {
    "Quiz-1": {
      title: "GK Quiz",
      description: "This quiz contains general knowledge questions.",
      questions: [
        {
          id: 1,
          question: "How many states does India currently have?",
          answers: [23, 24, 21, 29],
          correctAnswer: 29,
          userAnswer: null
        },
        {
          id: 2,
          question: "Who is the prime minister of India in 1991?",
          answers: ["Rahul Gandhi", "Narendra Modi", "Chandra Babu Naidu", "PV Narasimha Rao"],
          correctAnswer: "PV Narasimha Rao",
          userAnswer: null
        },
        {
          id: 3,
          question: "Why do male peacocks dance?",
          answers: ["Feel Hungry", "Mating call", "Its wish", "Wants to sleep"],
          correctAnswer: "Mating call",
          userAnswer: null
        },
        {
          id: 4,
          question: "What is the longest coast line in India?",
          answers: ["Andhra", "Kerala", "Karnataka", "Mumbai"],
          correctAnswer: "Andhra",
          userAnswer: null
        }
      ]
    },
    "Quiz-2": {
      title: "Science Quiz",
      description: "This quiz contains science questions.",
      questions: [
        {
          id: 1,
          question: "What is the 7th element of the periodic table?",
          answers: ["Nitrogen", "Oxygen", "Helium", "Neon"],
          correctAnswer: "Nitrogen",
          userAnswer: null
        },
        {
          id: 2,
          question: "Who invented radium and uranium?",
          answers: ["Marie Curie", "Narendra Modi", "Adolf Hitler", "George Bush"],
          correctAnswer: "Marie Curie",
          userAnswer: null
        },
        {
          id: 3,
          question: "How is the percentage of oxygen on earth?",
          answers: [45, 23, 34, 1],
          correctAnswer: 23,
          userAnswer: null
        },
        {
          id: 4,
          question: "What is the chemical formula of farts?",
          answers: ["O2", "SO2", "S2O", "N2O"],
          correctAnswer: "SO2",
          userAnswer: null
        }
      ]
    },
    "Quiz-3": {
      title: "Movies Quiz",
      description: "This quiz contains movie-related questions.",
      questions: [
        {
          id: 1,
          question: "Who is the actor that played Bahubali?",
          answers: ["Narendra Modi", "Hrithik Roshan", "Shahrukh Khan", "Prabhas"],
          correctAnswer: "Prabhas",
          userAnswer: null
        },
        {
          id: 2,
          question: "What are the box office collections of the movie Sholay in crores?",
          answers: [15, 54, 42, 10],
          correctAnswer: 10,
          userAnswer: null
        },
        {
          id: 3,
          question: "What is the habitual dialogue phrase of Allu Arjun in Pushpa?",
          answers: ["Mai jukhega nahi sala", "Ded sow rupaya dega", "Hahahahahaha", "Jai Prabhas"],
          correctAnswer: "Mai jukhega nahi sala",
          userAnswer: null
        },
        {
          id: 4,
          question: "Who did Shahrukh Khan clash his movie with in 2018?",
          answers: ["Yash", "Prabhas", "Allu Arjun", "Salman Khan"],
          correctAnswer: "Yash",
          userAnswer: null
        }
      ]
    }
  },
  selectedQuiz: null
};

const quizReducer = (state = initialState, action) => {

  switch (action.type) {
    case SELECT_QUIZ:
      return {
        ...state,
        selectedQuiz: action.payload
      };
    case ANSWER_QUESTION:
      const { quizId, questionId, answer } = action.payload;
      return {
        ...state,
        quizzes: {
          ...state.quizzes,
          [quizId]: {
            ...state.quizzes[quizId],
            questions: state.quizzes[quizId].questions.map((q) =>
              q.id === questionId ? { ...q, userAnswer: answer } : q
              )
          }
        }
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  quiz: quizReducer
});

/// /quiz1/question1