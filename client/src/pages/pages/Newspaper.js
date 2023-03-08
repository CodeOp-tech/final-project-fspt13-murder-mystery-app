import { useRouter } from "next/router";

export default function Newspaper() {
  const router = useRouter();
  return (
    <>
      <div className="newspaper">
        <h1>Newspaper</h1>
        <img src="../Pictures/newspaper1.png" alt="newspaper" />
        <button type="button" onClick={() => router.push("/pages/suspects")}>
          Click Me
        </button>
      </div>
    </>
  );
}
