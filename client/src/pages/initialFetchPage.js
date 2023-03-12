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
