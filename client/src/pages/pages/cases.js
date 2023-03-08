import { useRouter } from "next/router";

export default function Cases() {
  const router = useRouter();
  return (
    <>
    <div className="cases">
    <h1>Case Choice</h1> 

    <button type="button" onClick={() => router.push('/newspaper')}>Click Me</button>

    </div>

    </>
  );
}
