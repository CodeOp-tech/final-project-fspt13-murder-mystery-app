import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="homepage">
        <h1>Murder Mystery</h1>

<<<<<<< HEAD
    <div className='homepage'>
      <h1>Murder Mystery</h1>

      <button type="button" onClick={() => router.push('/pages/cases')}>Click Me</button>

||||||| a4c452b
    <div className='homepage'>
      <h1>Murder Mystery</h1>

      <button type="button" onClick={() => router.push('/cases')}>Click Me</button>

=======
        <button type="button" onClick={() => router.push("/cases")}>
          Click Me
        </button>
>>>>>>> 8dfe7d25f290b91aa31693aa7bf49034b84bc498
      </div>
    </>
  );
}
