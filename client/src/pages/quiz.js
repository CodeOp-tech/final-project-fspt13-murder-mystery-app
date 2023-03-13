import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";

// useEffect(() => {
//   const fetchEntries = async () => {
//     const response = await fetch("http://localhost:5050/questionsAnswers");
//     const questions = await response.json();

//     setEntries(questions);
//   };

//   fetchEntries();
// }, []);

// const easyQuestions = questions.filter(
//   (question) => question.category === "Easy"
// );

// const intermediateQuestions = questions.filter(
//   (question) => question.category === "Intermediate"
// );

// const advancedQuestions = questions.filter(
//   (question) => question.category === "Advanced"
// );

// const questionGroups = [{name: 'Easy', questions: easyQuestions}, {name: 'Intermediate', questions: intermediateQuestions}, {name: 'Advanced', questions: advancedQuestions}]

export default function Quiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      questionText: "What is the capital of Italy?",
      answerOptions: [
        { answerText: "Rome", isCorrect: true },
        { answerText: "Paris", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Barcelona", isCorrect: false },
      ],
    },

    {
      questionText: "What year is it?",
      answerOptions: [
        { answerText: "2020", isCorrect: false },
        { answerText: "2022", isCorrect: false },
        { answerText: "2023", isCorrect: true },
        { answerText: "2024", isCorrect: false },
      ],
    },
    {
      questionText: "Who currently owns Twitter",
      answerOptions: [
        { answerText: "Jack Dorsey", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Mark Zuckerberg", isCorrect: false },
        { answerText: "Jeff Bezos", isCorrect: false },
      ],
    },
    {
      questionText: "What is 5 + 5?",
      answerOptions: [
        { answerText: "2", isCorrect: false },
        { answerText: "7", isCorrect: false },
        { answerText: "10", isCorrect: true },
        { answerText: "5", isCorrect: false },
      ],
    },
  ];

  const tips = [
    "The killer is right-handed",
    "There was a personal grudge",
    "There was a manicured nail found",
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      alert("Tip is ...");
    } else {
      alert("Incorrect, try again");
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert("Time to solve the murder!");
    }
  };

  return (
    <>
      <h1>Quiz</h1>
      <div className="tip-section">
        Your tip is{" "}
        {tips.map((tip) => {
          {
            tip;
          }
        })}
      </div>
      <div className="quiz">
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>

        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button
              onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
      <button
        className="quiz-button"
        type="button"
        onClick={() => router.push("/reveal")}
      >
        Click Me
      </button>
    </>
  );
}
