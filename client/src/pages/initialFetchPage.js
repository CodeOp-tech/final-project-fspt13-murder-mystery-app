import {useEffect, useState} from 'react'

const questionFetch = () => {
  const [questions, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch("http://localhost:5050/questionsAnswers");
      const questions = await response.json();

      setEntries(questions);
    };

    fetchEntries();
  }, []);

  const easyQuestions = questions.filter(
    (question) => question.category === "Easy"
  );

  const intermediateQuestions = questions.filter(
    (question) => question.category === "Intermediate"
  );

  const advancedQuestions = questions.filter(
    (question) => question.category === "Advanced"
  );

  const questionGroups = [{name: 'Easy', questions: easyQuestions}, {name: 'Intermediate', questions: intermediateQuestions}, {name: 'Advanced', questions: advancedQuestions}]


    return (
      <main>
      {questionGroups.map (group => {
        <div>
          <h2>{group.category} level</h2>
        </div>
        
        
      })}</main>





    )

};

export default questionFetch;
{/* <div className="answer-section">
{questions[currentQuestion].answerOptions.map((answerOption) => (
  <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
))}
// </div> */}

// // const onAnswerSelected = (isCorrect) => {
// //     if (isCorrect === true) {
// //       alert("Your clue is ...");
// //     } else {
// //       alert("Incorrect, try again");
// //     }



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