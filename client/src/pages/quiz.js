import { React, useState, useEffect } from "react";

export default function Quiz({ closePopUp, onFinish }) {
  const [selectedValue, setSelectedValue] = useState("easy");
  console.log("check levels", selectedValue)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
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
            //add score as percentage
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    setCurrentQuestion((prev) => prev + 1);
  };

  function handleClue() {
    const levels = {
      easy: 1,
      intermediate: 15,
      hard: 20
  
    }
    const isCluesListVisible = result.correctAnswers >= levels[selectedValue]

    onFinish(isCluesListVisible)
    
  }

   const isFinished = result.correctAnswers + result.wrongAnswers === questions.length 
   
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

  // function handleSubmit() {
  //   e.preventDefault();
  // }

  function handleRadioChange(event) {
    console.log(event.target.value)
    setSelectedValue(event.target.value);
  }

 

  return (
    <>
      {status === "loading" && <div>Loading</div>}
      {status === "success" && (
        <>
          <div className="body-quiz">
            <div className="quiz-container">
              {!isFinished ? (
                <div>
                  <div>
                    <form >
                      <input
                        type="radio"
                        value="easy"
                        name="selection"
                        checked={selectedValue === 'easy'}
                        onChange={handleRadioChange}
                      />{" "}
                      Easy
                      <input
                        type="radio"
                        value="intermediate"
                        name="selection"
                        checked={selectedValue === 'intermediate'}
                        onChange={handleRadioChange}
                      />{" "}
                      Intermediate
                      <input
                        type="radio"
                        value="advanced"
                        name="selection"
                        checked={selectedValue === 'advanced'}
                        onChange={handleRadioChange}
                      />{" "}
                      Advanced
                      {/* <button type="submit">Submit</button> */}
                    </form>
                    <br/>
                  </div>
                  <div>
                    {/* <button className="play" onClick={closePopUp}>
                      X
                    </button>{" "} */}
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
                          key={index}
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
                    <button className="play2" onClick={closePopUp}>
                      Close Quiz
                    </button>{" "}
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
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
