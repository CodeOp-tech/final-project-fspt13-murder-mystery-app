import { useState } from "react";
import Suspects from "./suspects";

export default function Reveal() {
  const [isKiller, setIsKiller] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  function handleRadioChange(event) {
    setSelectedValue(event.target.value);
  }

  function revealKiller(e) {
    e.preventDefault();
    if (selectedValue === "Tom Davies") {
      setIsKiller(true);
    } else {
      alert("That's not right, please try again.");
      window.location.reload();
    }
  }

  return (
    <>
      <div className="reveal">
        <h1>Reveal</h1>
        <h3>Who killed Robert Thompson?</h3>
        <form onSubmit={revealKiller}>
          <input
            type="radio"
            value="Emma Johnson"
            name="suspect"
            onChange={handleRadioChange}
          />{" "}
          Emma Johnson
          <input
            type="radio"
            value="Jack Wilson"
            name="suspect"
            onChange={handleRadioChange}
          />{" "}
          Jack Wilson
          <input
            type="radio"
            value="Karen Thompson"
            name="suspect"
            onChange={handleRadioChange}
          />{" "}
          Karen Thompson
          <input
            type="radio"
            value="Tom Davies"
            name="suspect"
            onChange={handleRadioChange}
          />{" "}
          Tom Davies
          <button type="submit">Submit</button>
        </form>

        <div>
          {isKiller && (
            <div>
              Congratulations! You caught the murderer!
              <img
                src="../Pictures/tomdavies.jpg"
                className="img-reveal"
                alt="tomdavies"
              />
            </div>
          )}
        </div>
      </div>
      <Suspects />
    </>
  );
}
