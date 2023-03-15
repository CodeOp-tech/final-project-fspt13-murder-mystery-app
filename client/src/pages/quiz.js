import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";
import Suspects from "./suspects";

export default function Quiz({ closePopUp }) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [{ status, questions }, setState] = useState({
    status: "loading",
    questions: [],
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      setState((state) => ({
        ...state,
        status: "loading",
      }));

      try {
        const response = await fetch("http://localhost:5050/questionsAnswers");
        const data = await response.json();

        const questions = data.map((entity) => ({
          questionText: entity.question,
          category: entity.category,
          answerOptions: [entity.answer1, entity.answer2, entity.answer3].map(
            (text) => ({
              answerText: text,
              isCorrect: text === entity.correctAnswer,
            })
          ),
        }));

        setState((state) => ({
          ...state,
          status: "success",
          questions,
        }));
      } catch (error) {
        setState((state) => ({
          ...state,
          status: "error",
        }));
      }
    };

    fetchQuestions();
  }, []);

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
      {status === "loading" && <div>Loading</div>}
      {status === "success" && (
        <>
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
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
              <button className="play" onClick={closePopUp}>
                X
              </button>{" "}
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
      )}
    </>
  );
}
