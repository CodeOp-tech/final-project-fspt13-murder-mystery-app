import { useRouter } from "next/router";

export default function Quiz() {
  const router = useRouter();

  return (
    <>
      <div className="quiz">
        <h1>Quiz</h1>

        <button type="button" onClick={() => router.push("/pages/reveal")}>
          Click Me
        </button>
      </div>
    </>
  );
}
