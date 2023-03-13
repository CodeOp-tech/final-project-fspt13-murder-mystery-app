import { useRouter } from "next/router";
import { React, useState, useEffect } from 'react';


const BASE_URL = "http://localhost:5050"


export default function Quiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  })

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch(`${BASE_URL}/questionsAnswers`);
      const questions = await response.json();
 
      fetchEntries(questions);
    };
 
    fetchEntries();
  }, []);
 
  //const easyQuestions = questions.filter(
  //  (question) => question.category === "Easy"
  //);
 
  const intermediateQuestions = questions.filter(
    (question) => question.category === "Intermediate"
  );
 /*
  const advancedQuestions = questions.filter(
    (question) => question.category === "Advanced"
  );
 
  const questionGroups = [{name: 'Easy', questions: easyQuestions}, {name: 'Intermediate', questions: intermediateQuestions}, {name: 'Advanced', questions: advancedQuestions}]
*/


const onClickNext = () => {
  setCurrentQuestion((prev) => {
    prev + 1;
  })
}





const handleAnswerButtonClick = (answer) => {
  if(answer === correctAnswer) {
    alert("Tip is ...")
  } else {
    alert("Incorrect, try again")
  }
}
  
  return (
    <>
    
     
      
      <h1>Quiz</h1>
      
       <div className="quiz">
       <div className="question-text">{intermediateQuestions}</div>


       <ul>
        {intermediateQuestions.map((question) => (
          <li key={question.id}>{question.question}</li>
        ))}
      </ul>

      <button onClick={onClickNext}>Next</button>



    

    </div>
    <button type="button" onClick={() => router.push('/reveal')}>Click Me</button>


    </>
  );
}

/*
<div className="answer-section">
{questions[currentQuestion].answerOptions.map((answerOption) => (
  <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
))}
</div>
*/