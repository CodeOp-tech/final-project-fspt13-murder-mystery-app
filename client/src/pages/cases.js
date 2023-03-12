import { useRouter } from "next/router";

export default function Cases() {
  const router = useRouter();
  return (
    <>
      <div className="cases">
        <h1>Case Choice</h1>
        <img
          src="../Pictures/victim1.jpg"
          alt="emmajohnson"
          onClick={() => router.push("/newspaper")}
        />
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
          Click Me
        </button>
      </div>
    </>
  );
}
