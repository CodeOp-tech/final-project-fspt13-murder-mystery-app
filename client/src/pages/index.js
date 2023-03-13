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
        <div className="second-section">
          <img
            src="https://thumbs.gfycat.com/LimpingCarefreeGlassfrog-size_restricted.gif"
            alt="coding"
            className="coding-img"
          />
          <p>
            With engaging storylines and mind-bending puzzles, this app is the
            perfect way to exercise your brain and have fun at the same time.
            <br></br>
            Whether you're a seasoned programmer or a beginner, our puzzles are
            designed to be challenging but solvable with a little bit of thought
            and effort.<br></br>
          </p>
        </div>
        <div className="last-section">
          <p>
            So what are you waiting for? Put on your thinking cap and dive into
            the world of mystery and intrigue. <br></br>
            With our murder mystery app, you're the hero of the story – and it's
            up to you to catch the killer before they strike again.<br></br>
            <button type="button" onClick={() => router.push("/cases")}>
              {" "}
              Start Now!
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
