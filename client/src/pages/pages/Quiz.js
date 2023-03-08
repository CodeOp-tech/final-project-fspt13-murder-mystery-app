import { useRouter } from "next/router";

export default function Quiz() {
  const router = useRouter();

  return (
    <>
      <div className="quiz">
        <h1>Quiz</h1>

<<<<<<< HEAD
    <div className="quiz">
    
    <h1>Quiz</h1>

    <button type="button" onClick={() => router.push('/pages/reveal')}>Click Me</button>

    </div>

||||||| a4c452b
    <div className="quiz">
    
    <h1>Quiz</h1>

    <button type="button" onClick={() => router.push('/reveal')}>Click Me</button>

    </div>

=======
        <button type="button" onClick={() => router.push("/reveal")}>
          Click Me
        </button>
      </div>
>>>>>>> 8dfe7d25f290b91aa31693aa7bf49034b84bc498
    </>
  );
}
