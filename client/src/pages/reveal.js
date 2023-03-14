import { useState } from "react";

export default function Reveal() {
  const [isKiller, setIsKiller] = useState(false);
  const [suspects, setSuspects] = useState({});

  function revealKiller(e) {
    e.preventDefault();
    const value = e.target.value;
    if (value === "Tom Davies") {
      setIsKiller(true);
      alert("That's right");
    } else {
      alert("try again");
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
            name="gender"
            onClick={(e) => e.target.value}
          />{" "}
          Emma Johnson
          <input
            type="radio"
            value="Jack Wilson"
            name="gender"
            onClick={(e) => e.target.value}
          />{" "}
          Jack Wilson
          <input
            type="radio"
            value="Karen Thompson"
            name="gender"
            onClick={(e) => e.target.value}
          />{" "}
          Karen Thompson
          <input
            type="radio"
            value="Tom Davies"
            name="gender"
            onClick={(e) => e.target.value}
          />{" "}
          Tom Davies
          <button type="submit">Submit</button>
        </form>

        <div>{isKiller && <>Right</>}</div>
      </div>
    </>
  );
}
