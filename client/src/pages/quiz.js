import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";


// const BASE_URL = "http://localhost:5050"


export default function Quiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [{status, questions}, setState] = useState({
    status: "loading",
    questions: []
  });

 
  useEffect(() => {
    const quizQuestions = async () => {
      setState(state => ({
        ...state,
        status: "loading"
      }))

      try {
        const response = await fetch("http://localhost:5050/questionsAnswers");
        const data = await response.json();

        const questions = data.map(entity => ({
          index: entity.id,
          questionText: entity.question,
          category: entity.category,
          answerOptions: [entity.answer1, entity.answer2, entity.answer3].map(text => ({
            answerText: text,
            isCorrect: text === entity.correctAnswer
          }))
        }))

        setState(state => ({
          ...state,
          status: "success",
          questions
        }))
      } catch(error) {
        setState(state => ({
          ...state,
          status: "error"
        }))
      }
    };

    quizQuestions();
  }, []);

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setCurrentQuestion((prev) => prev + 1)
    setResult((prev) =>
    selectedAnswer
    ? {
        ...prev,
        score: prev.score + 1,
        correctAnswers: prev.correctAnswers + 1,
      }
    : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
) 
}


const onAnswerSelected = (isCorrect, index) => {
  setSelectedAnswerIndex(index) 
  if (isCorrect === true) {
        setSelectedAnswer(true)
        console.log('Correct')
      } else {
        setSelectedAnswer(false)
        console.log('Incorrect')
}};
 
const addZero = (number) => (number > 9 ? number : `0${number}`)
  return (
   <>
    <h1>Quiz</h1>

      {status === "loading" && <div>Loading</div>}
      {status === "success" && (
        <>
          <div className="quiz-container">
            {/* {!showResult ? ( */}
            <div>
              <span className="active-question-no">
                {addZero(currentQuestion + 1)}
              </span>
              <span className="total-question">
                /{addZero(questions.length)}
              </span>
            </div>
            
              <h2>{questions[currentQuestion].questionText}</h2>
              <ul>{questions[currentQuestion].answerOptions.map   ((answerOption, index) => (
                <li onClick = {() => onAnswerSelected       (answerOption.isCorrect, index)}
                  key={answerOption}
                  className={selectedAnswerIndex === index ? "selected-answer" : null
                }>
                    {answerOption.answerText}

                  </li>
                ))}
              </ul>
              <div className="flex-right">
            
              <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                
                </button>
                 <button
            className="quiz-button"
            type="button"
            onClick={() => router.push("/reveal")}
          >
            Click Me
          </button>

        </div>
      </div>
      </>
      )}
    </>
  );
}

          
            
 
    
  
;

{/* <div className="answer-section">
{questions[currentQuestion].answerOptions.map((answerOption) => (
  <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
))}
</div> */}

// const onAnswerSelected = (isCorrect) => {
//     if (isCorrect === true) {
//       alert("Your clue is ...");
//     } else {
//       alert("Incorrect, try again");
//     }



 {/* <div className="tip-section">
            Your tip is{" "}
            {tips.map((tip) => {
              {
                tip;
              }
            })}
          </div> */}
/*
<div className="answer-section">
{questions[currentQuestion].answerOptions.map((answerOption) => (
  <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
))}
</div>
*/
 // const clues = [
  //   "The killer is right-handed",
  //   "There was a personal grudge",
  //   "There was a manicured nail found",
  // ];

  // const handleAnswerButtonClick = (isCorrect) => {
  //   if (isCorrect === true) {
  //     alert("Your clue is ...");
  //   } else {
  //     alert("Incorrect, try again");
  //   }
  //   const nextQuestion = currentQuestion + 1;

  //   if (nextQuestion < questions.length) {
  //     setCurrentQuestion(nextQuestion);
  //   } else {
  //     alert("Time to solve the murder!");
  //   }
  // };

{/* <button
                  onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </button> */}

//   useEffect(() => {
//     const fetchEntries = async () => {
//       const response = await fetch(`${BASE_URL}/questionsAnswers`);
//       const questions = await response.json();
 
//       fetchEntries(questions);
//     };
 
//     fetchEntries();
//   }, []);
 
  //const easyQuestions = questions.filter(
  //  (question) => question.category === "Easy"
  //);
 
  // const intermediateQuestions = questions.filter(
  //   (question) => question.category === "Intermediate"
  // );
 /*
  const advancedQuestions = questions.filter(
    (question) => question.category === "Advanced"
  );
 
  const questionGroups = [{name: 'Easy', questions: easyQuestions}, {name: 'Intermediate', questions: intermediateQuestions}, {name: 'Advanced', questions: advancedQuestions}]
   // function quizCounter(questions) {
  //   this.score = 0;
  //   this.questions = questions;
  //   this.currentQuestionIndex = 0;
  // }
*/