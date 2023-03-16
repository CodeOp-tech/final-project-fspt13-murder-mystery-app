import { useState } from "react";
import { useRouter } from "next/router";

export default function Reveal() {
  const [isKiller, setIsKiller] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();

  function handleRadioChange(event) {
    setSelectedValue(event.target.value);
  }

  function revealKiller(e) {
    e.preventDefault();
    if (selectedValue === "Tom Davies") {
      setIsKiller(true);
    } else {
      alert("That's not right, please try again");
    }
  }

  return (
    <>
      <div>
        <button type="button" onClick={() => router.push("/")}>
          Home
        </button>
      </div>
      <div className="reveal">
        <h1>Who killed Robert Thompson?</h1>

        <form onSubmit={revealKiller}>
          <input
            type="radio"
            value="Emma Johnson"
            name="suspect"
            onChange={handleRadioChange}
          />{" "}
          Emma Johnson
          <img
            src="../Pictures/emmajohnson.jpg"
            alt="emmajohnson"
            className="reveal-pic-susp"
          />
          <input
            type="radio"
            value="Jack Wilson"
            name="suspect"
            onChange={handleRadioChange}
          />{" "}
          Jack Wilson
          <img
            src="../Pictures/jackwilson.jpg"
            alt="jackwilson"
            className="reveal-pic-susp1"
          />
          <input
            type="radio"
            value="Karen Thompson"
            name="suspect"
            onChange={handleRadioChange}
          />{" "}
          Karen Thompson
          <img
            src="../Pictures/KarenThompson.jpg"
            alt="karenthompson"
            className="reveal-pic-susp2"
          />
          <input
            type="radio"
            value="Tom Davies"
            name="suspect"
            onChange={handleRadioChange}
          />{" "}
          Tom Davies
          <img
            src="../Pictures/tomdavies.jpg"
            alt="tomdavies"
            className="reveal-pic-susp1"
          />
          <br></br>
          <br></br>
          <button type="submit" className="reveal-btn">
            Submit
          </button>
        </form>
        <br></br>
        <br></br>
        <div>
          {isKiller && (
            <div className="reveal-killer">
              <img
                src="https://static01.nyt.com/images/2013/03/07/arts/07SHERLOCK/07SHERLOCK-superJumbo.jpg"
                className="img-reveal"
                alt="tomdavies"
              />
              <p className="reveal-paragraph">
                Congratulations, Sherlock! You caught the killer.<br></br>
                Thanks to you Tom Davies is now in jail.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
