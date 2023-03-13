import { useRouter } from "next/router";

export default function Cases() {
  const router = useRouter();
  return (
    <>
      <h1>Case Choice</h1>
      <div className="cases">
        <img src="../Pictures/victim1.jpg" alt="robert" />
        <h4>Robert Thompson</h4>
        <h5>Javascript begginer</h5>
        <p className="case-intro">
          Robert Thompson was a wealthy businessman in Oakville who owned a
          successful real estate firm.<br></br>
          He was known for his philanthropic work in the community and was
          highly respected by his peers. <br></br>
          One day, he was found murdered in his office with multiple blunt force
          trauma injuries.<br></br>
          The police began investigating the murder and identified four
          suspects, each with a possible motive for the murder. <br></br>
        </p>
        <button type="button" onClick={() => router.push("/newspaper")}>
          Work this case
        </button>
      </div>
    </>
  );
}
