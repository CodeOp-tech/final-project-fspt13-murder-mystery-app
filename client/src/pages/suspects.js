import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Quiz from "./quiz";

export default function Suspects() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCluesListVisible, setIsCluesListVisible] = useState(false);

  const clues = [
    `Witnesses reported seeing a person wearing a dark hoodie and jeans leaving 
  the office building around the time of the murder. The person was speaking on the phone. 
  The police believe that this person may have been involved in the crime.`,
    `The police found a cigarette butt in the crime scene 
  suggesting that the murderer might be a smoker`,
  ]

  function handleClick(isPlaying) {
    setIsPlaying(isPlaying);
  }
  function handleClosePopup() {
    setIsPlaying(false);
  }

  function handleFinish(isCluesListVisible) {
    setIsPlaying(false)
    setIsCluesListVisible(isCluesListVisible)
  }

  return (
    <div>
      <div className="suspects_container">
        <h1 className="suspects-title">Suspects</h1>
        <br/>
        <p className="suspects-intro">
          Here you can see the four suspects that the police believe are linked to the death of Robert.  

        </p>

        <div className="suspects">
          <div className="suspect1">
            <img
              src="../Pictures/emmajohnson.jpg"
              alt="emmajohnson"
              className="suspect-pic"
            />
            <h2>Emma Johnson</h2>
            <p className="suspect-intro">
              Robert's former assistant who was fired from her job after she was
              caught embezzling money from the company.
              <br/>
              <br/>
              She felt wronged by Robert and believed he deserved to die.
              <br></br>
            </p>
            <ul className="susp-list">
              <li>Date of birth: 15/06/1983</li>
              <li>Dominant hand: Right</li>
              <li>Smoker: No</li>
              <li>Owns a weapon: No</li>
              <li>Hobbies: Crafting, hiking, dancing </li>
            </ul>
          </div>
          <br></br>
          <br></br>
          <div className="suspect2">
            <img
              src="../Pictures/jackwilson.jpg"
              alt="jackwilson"
              className="suspect-pic"
            />
            <h2>Jack Wilson</h2>
            <p className="suspect-intro">
              A rival businessman who was envious of Robert's success and saw
              him as a threat to his own business.
              <br/>
              <br/>
              He believed that killing Robert would eliminate his competition.
              <br></br>
            </p>
            <ul className="susp-list">
              <li>Date of birth: 30/12/1978</li>
              <li>Dominant hand: Right</li>
              <li>Smoker: Yes</li>
              <li>Owns a weapon: Yes</li>
              <li>Hobbies: Sailing, Skiing, collecting stamps</li>
            </ul>
          </div>
          <br></br>
          <br></br>
          <div className="suspect3">
            <img
              src="../Pictures/KarenThompson.jpg"
              alt="karenthompson"
              className="suspect-pic"
            />
            <h2>Karen Thompson</h2>
            <p className="suspect-intro">
              Robert's wife who was unhappy in their marriage due to Robert's gambling addiction and wanted to
              collect his life insurance policy.
              <br/>
              <br/>
              She saw his death as a way to clear the debt he'd built up in her name.<br></br>
            </p>
            <ul className="susp-list">
              <li>Date of birth: 21/02/1964</li>
              <li>Dominant hand: Left</li>
              <li>Smoker: Yes</li>
              <li>Owns a weapon: No</li>
              <li>Hobbies: reading, gardening, astrology</li>
            </ul>
          </div>
          <br></br>
          <br></br>

          <div className="suspect4">
            <img
              src="../Pictures/tomdavies.jpg"
              alt="tomdavies"
              className="suspect-pic"
            />
            <h2>Tom Davies</h2>
            <p className="suspect-intro">
              Robert's friend and business partner who was struggling
              financially and owed a lot of money to Robert.
              <br/>
              <br/>
              He saw killing Robert as a way to solve his financial problems.
              <br></br>
            </p>
            <ul className="susp-list">
              <li>Date of birth: 17/05/1965</li>
              <li>Dominant hand: right</li>
              <li>Smoker: Yes</li>
              <li>Owns a weapon: No</li>
              <li>
                Hobbies: listen to classical music, bet on horses, woodturning
              </li>
            </ul>
          </div>
        </div>
        <button className="play" onClick={() => handleClick(true)}>
          Start the Quiz to Unlock the Clues
        </button>{" "}
        {isCluesListVisible && (
          <ul>
            {clues.map((clue, index) => (
              <li key={index}>{clue}</li>
            ))}
          </ul>
        )}
        {isPlaying && <Quiz closePopUp={handleClosePopup} onFinish={handleFinish} />}
        <br/>
         
        <button className="guess-button" type="button" onClick={() => router.push("/reveal")}>
          Ready to take a guess? Click here.
        </button> 
        
        <button className="back-button "type="button" onClick={() => router.push("/newspaper")}>
          Back
        </button>
      </div>
    </div>
  );
}
