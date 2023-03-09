import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="homepage">
        <section className="title-section">
          <h1 className="hero-title">KILLER CODING</h1>
        </section>
        <section className="hero-section">
          <h3>Welcome to the ultimate murder mystery app!</h3>
          <p>
            Are you ready to put your detective skills to the test?<br></br>
            This app will challenge your problem-solving abilities as <br></br>
            you solve JavaScript puzzles to unlock clues that will help<br></br>
            you solve a thrilling murder case.<br></br>
          </p>
        </section>
        <button type="button" onClick={() => router.push("/pages/cases")}>
          Click Me
        </button>
      </div>
    </>
  );
}
