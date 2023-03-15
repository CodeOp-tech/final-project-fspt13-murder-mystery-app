import { useRouter } from "next/router";

export default function Newspaper() {
  const router = useRouter();
  return (
    <>
      <div className="newspaper">
        <img
          src="../Pictures/newspaper1.png"
          alt="newspaper"
          className="img-newspaper"
        />
        <button type="button" onClick={() => router.push("/cases")}>
          Back
        </button>
        <button type="button" onClick={() => router.push("/suspects")}>
          Next
        </button>
      </div>
    </>
  );
}
