import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";
import Tip1 from "./components/tip1";
import Suspects from "./suspects";

export default function Quiz({ closePopUp }) {
  const router = useRouter();
  const [clues, setClues] = useState([
    `Witnesses reported seeing a person wearing a dark hoodie and jeans leaving 
  the office building around the time of the murder. The person was speaking on the phone. 
  The police believe that this person may have been involved in the crime.`,
    `The police found a cigarette butt in the crime scene 
  suggesting that the murderer might be a smoker`,
  ]);
  const [displayClue, setDisplayClue] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    totalClues: 0,
  });
  const [{ status, questions }, setState] = useState({
    status: "loading",
    questions: [],
  });

  useEffect(() => {
    const quizQuestions = async () => {
      setState((state) => ({
        ...state,
        status: "loading",
      }));

      try {
        const response = await fetch("http://localhost:5050/questionsAnswers");
        const data = await response.json();

        const questions = data.map((entity) => ({
          index: entity.id,
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

    quizQuestions();
  }, []);

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
            totalClues: Math.floor(prev.correctAnswers / 2),
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (isCorrect, index) => {
    setSelectedAnswerIndex(index);
    if (isCorrect === true) {
      setSelectedAnswer(true);
      console.log("Correct");
    } else {
      setSelectedAnswer(false);
      console.log("Incorrect");
    }
  };

  const addZero = (number) => (number > 9 ? number : `0${number}`);

  function handleSubmit() {
    e.preventDefault();
  }

  function handleClue() {
    if (result.correctAnswers === 10) {
      setDisplayClue(true);
    }
  }

  // function handleClue() {

  //   if (selectedValue === "easy") {
  //     setLevel("easy")
  //     // if ((result.correctAnswers = 10 && result.wrongAnswers <= 20)) {
  //     //   clues.map((clue) => clue);
  //     }
  //   } else if (selectedValue === "intermediate") {
  //     // if ((result.correctAnswers = 15 && result.wrongAnswers <= 15)) {
  //     //   clues.map((clue) => clue);
  //     }
  //   } else if (selectedValue === "intermediate") {
  //     if ((result.correctAnswers = 20 && result.wrongAnswers <= 10)) {
  //       clues.map((clue) => clue);
  //     }
  //   }
  // }
  function handleRadioChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <>
      {status === "loading" && <div>Loading</div>}
      {status === "success" && (
        <>
          <div className="body-quiz">
            <div>
              {" "}
              <ul>
                {clues.map((clue, index) => (
                  <li key={index}>{clue}</li>
                ))}
              </ul>
            </div>
            <div className="quiz-container">
              {!showResult ? (
                <div>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="radio"
                        value="easy"
                        name="selection"
                        onChange={handleRadioChange}
                      />{" "}
                      Easy
                      <input
                        type="radio"
                        value="intermediate"
                        name="selection"
                        onChange={handleRadioChange}
                      />{" "}
                      Intermediate
                      <input
                        type="radio"
                        value="advanced"
                        name="selection"
                        onChange={handleRadioChange}
                      />{" "}
                      Advanced
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                  <div>
                    <button className="play" onClick={closePopUp}>
                      X
                    </button>{" "}
                    <span className="active-question-no">
                      {addZero(currentQuestion + 1)}
                    </span>
                    <span className="total-question">
                      /{addZero(questions.length)}
                    </span>
                  </div>

                  <h2 className="h2">
                    {questions[currentQuestion].questionText}
                  </h2>
                  <ul>
                    {questions[currentQuestion].answerOptions.map(
                      (answerOption, index) => (
                        <li
                          onClick={() =>
                            onAnswerSelected(answerOption.isCorrect, index)
                          }
                          key={answerOption}
                          className={
                            selectedAnswerIndex === index
                              ? "selected-answer"
                              : null
                          }
                        >
                          {answerOption.answerText}
                        </li>
                      )
                    )}
                  </ul>
                  <div className="flex-right">
                    <p className="correct-count">
                      Correct Answers:<span> {result.correctAnswers}</span>
                    </p>
                    <p className="wrong-count">
                      Wrong Answers:<span> {result.wrongAnswers}</span>
                    </p>
                    <button
                      onClick={onClickNext}
                      disabled={selectedAnswerIndex === null}
                    >
                      {currentQuestion === questions.length - 1
                        ? "Finish"
                        : "Next"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="result">
                  <h3>Results</h3>
                  <p>
                    Total Question: <span>{questions.length}</span>
                  </p>
                  <p>
                    Total Score:
                    <span> {(result.score / questions.length) * 100}</span>%
                  </p>
                  <p>
                    Correct Answers:<span> {result.correctAnswers}</span>
                  </p>
                  <p>
                    Wrong Answers:<span> {result.wrongAnswers}</span>
                  </p>
                  <p>
                    Clues Unlocked:<span> {result.totalClues}</span>
                  </p>
                  <button
                    className="quiz-button"
                    type="button"
                    onClick={handleClue}
                  >
                    Give me my clues and let me solve this case!
                  </button>
                  {displayClue && (
                    <ul>
                      {clues.map((clue, index) => (
                        <li key={index}>{clue}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
