import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Suspects() {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:5050/questionsAnswers");
      const questions = await response.json();

      setQuestions(questions);
    };

    fetchQuestions();
  }, []);

  return (
    <div className="suspects_container">
      <h1 className="suspects-title">Suspects</h1>
      <div className="suspects">
        <div className="suspect1">
          <img
            src="../Pictures/emmajohnson.jpg"
            alt="emmajohnson"
            className="suspect-pic"
          />
          <p className="suspect-intro">
            1. Emma Johnson - Robert's former assistant who was fired from her
            job after she was caught embezzling money from the company.<br></br>
            She felt wronged by Robert and believed he deserved to die.
            <br></br> Date of birth:15/06/1983 <br></br>
            Dominant hand: Right-handed <br></br>
            Smoker? No
            <br></br>
            Hobbies: Crafting, hiking, dancing Do you own a weapon? No
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="suspect2">
          <img
            src="../Pictures/jackwilson.jpg"
            alt="jackwilson"
            className="suspect-pic"
          />
          <p className="suspect-intro">
            2. Jack Wilson - A rival businessman who was envious of Robert's
            success and saw him as a threat to his own business.<br></br>
            He believed that killing Robert would eliminate his competition.
            <br></br>
            Date of birth:30/12/1978<br></br>
            Dominant hand: Right-handed<br></br>
            Smoker? Yes<br></br>
            Do you own a weapon? Yes Hobbies: Sailing, Skiing, collecting stamps
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="suspect3">
          <img
            src="../Pictures/karenthompson.jpg"
            alt="karenthompson"
            className="suspect-pic"
          />
          <p className="suspect-intro">
            3. Karen Thompson - Robert's wife who was unhappy in their marriage
            and wanted to collect his life insurance policy.<br></br>
            She saw his death as a way to get what she wanted.<br></br>
            Date of birth: 21/02/1964<br></br>
            Smoker?Yes<br></br>
            Do you own a weapon? No<br></br>
            Dominant hand: Left handed<br></br>
            Hobbies: reading, gardening, astrology<br></br>
          </p>
        </div>
        <br></br>
        <br></br>
      </div>
      <div className="suspect4">
        <img
          src="../Pictures/tomdavies.jpg"
          alt="tomdavies"
          className="suspect-pic"
        />
        <p className="suspect-intro">
          4. Tom Davis - Robert's friend and business partner who was struggling
          financially and owed a lot of money to Robert.<br></br>
          He saw killing Robert as a way to solve his financial problems.
          <br></br>
          Date of birth: 17/05/1965<br></br>
          Dominant hand: right-handed<br></br>
          Smoker? Yes<br></br>
          Do you own a weapon? No<br></br>
          Hobbies: listen to classical music, bet on horses, woodturning
        </p>
      </div>
      <br></br>
      <div>
        <p>
          Here is where the fun begins, unlock the tips to get to the murderer!
        </p>
        <br></br>
        <button className="tips">Unlock tip number 1</button>
        <button className="tips">Unlock tip number 2</button>
        <button className="tips">Unlock tip number 3</button>
        <button className="tips">Unlock tip number 4</button>
        <button className="tips">Unlock tip number 5</button>
        <br></br>
      </div>
      {/*<button className="tips">Unlock tip number 1</button>
        <button className="tips">Unlock tip number 2</button>
        <button className="tips">Unlock tip number 3</button>
        <button className="tips">Unlock tip number 4</button>
  <button className="tips">Unlock tip number 5</button>

        {correctAnswers === 5 && <div>First tip</div>}
        {correctAnswers === 10 && <div>Second tip</div>}
        {correctAnswers === 15 && <div>Third tip</div>}
  
  */}

      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.question}</li>
        ))}
      </ul>

      <button type="button" onClick={() => router.push("/quiz")}>
        Click Me
      </button>
    </div>
  );
}
