const questionFetch = () => {
  const [questions, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch("http://localhost:5050/questionAnswers");
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

  const questionGroups = [{name: 'Easy', mountains: easyQuestions}, {name: 'Intermediate', mountains: intermediateQuestions}, {name: 'Advanced', mountains: advancedQuestions}]


    return (
      <main>
      {questionGroups.map (group => {
        <div>
          <h2>{group.category} level</h2>
        </div>
        
        
      })}</main>





    )

};
