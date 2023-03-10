import { useRouter } from "next/router";

export default function Suspects() {
  const router = useRouter();
  return (
    <>
      <div className="suspects_container">
        <h1>Suspects</h1>
        <div className="suspects">
          <h1 className="test">test</h1>
          <img src="../Pictures/emmajohnson.jpg" alt="emmajohnson" />
          1. Emma Johnson - Robert's former assistant who was fired from her job
          after she was caught embezzling money from the company. She felt
          wronged by Robert and believed he deserved to die.
          <br></br> Date of birth:15/06/1983 <br></br>
          Dominant hand: Right-handed <br></br>
          Smoker? No
          <br></br>
          Hobbies: Crafting, hiking, dancing Do you own a weapon? No
          <br></br>
          <br></br>
          <img src="../Pictures/jackwilson.jpg" alt="jackwilson" />
          2. Jack Wilson - A rival businessman who was envious of Robert's
          success and saw him as a threat to his own business.<br></br>
          He believed that killing Robert would eliminate his competition.
          <br></br>
          Date of birth:30/12/1978<br></br>
          Dominant hand: Right-handed<br></br>
          Smoker? Yes<br></br>
          Do you own a weapon? Yes Hobbies: Sailing, Skiing, collecting stamps
          <br></br>
          <br></br>
          <img src="../Pictures/karenthompson.jpg" alt="karenthompson" />
          3. Karen Thompson - Robert's wife who was unhappy in their marriage
          and wanted to collect his life insurance policy.<br></br>
          She saw his death as a way to get what she wanted.<br></br>
          Date of birth: 21/02/1964<br></br>
          Smoker?Yes<br></br>
          Do you own a weapon? No<br></br>
          Dominant hand: Left handed<br></br>
          Hobbies: reading, gardening, astrology<br></br>
          <br></br>
          <br></br>
          <img src="../Pictures/tomdavies.jpg" alt="tomdavies" />
          4. Tom Davis - Robert's friend and business partner who was struggling
          financially and owed a lot of money to Robert.<br></br>
          He saw killing Robert as a way to solve his financial problems.
          <br></br>
          Date of birth: 17/05/1965<br></br>
          Dominant hand: right-handed<br></br>
          Smoker? Yes<br></br>
          Do you own a weapon? No<br></br>
          Hobbies: listen to classical music, bet on horses, woodturning
          <br></br>
        </div>
        <button className="tips">Unlock tip number 1</button>
        <button className="tips">Unlock tip number 2</button>
        <button className="tips">Unlock tip number 3</button>
        <button className="tips">Unlock tip number 4</button>
        <button className="tips">Unlock tip number 5</button>

        <button type="button" onClick={() => router.push("/pages/quiz")}>
          Click Me
        </button>
      </div>
    </>
  );
}
