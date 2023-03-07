import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="homepage">
        <h1>Murder Mystery</h1>

        <button type="button" onClick={() => router.push("/cases")}>
          Click Me
        </button>
      </div>
    </>
  );
}
