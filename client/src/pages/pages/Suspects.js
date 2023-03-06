import { useRouter } from "next/router";

export default function Suspects() {
  const router = useRouter();
  return (
    <>
      <div className="suspects">
        <h1>Suspects</h1>
        <ol>
          <li>
            1. Emma Johnson - Robert's former assistant who was fired from her
            job after she was caught embezzling money from the company. She felt
            wronged by Robert and believed he deserved to die. Date of
            birth:15/06/1983 Dominant hand: Right-handed Smoker? No Hobbies:
            Crafting, hiking, dancing Do you own a weapon? No
          </li>
        </ol>

        <button type="button" onClick={() => router.push("/quiz")}>
          Click Me
        </button>
      </div>
    </>
  );
}
