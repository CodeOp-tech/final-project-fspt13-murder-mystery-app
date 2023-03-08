import { useRouter } from "next/router";

export default function Newspaper() {
  const router = useRouter();
  return (
    <>
      <div className="newspaper">
        <h1>Newspaper</h1>

<<<<<<< HEAD
    <button type='button' onClick={() => router.push('/pages/suspects')}>Click Me</button>

    </div>
    
    </> 
    )

}
||||||| a4c452b
    <button type='button' onClick={() => router.push('/suspects')}>Click Me</button>

    </div>
    
    </> 
    )

}
=======
        <button type="button" onClick={() => router.push("/suspects")}>
          Click Me
        </button>
      </div>
    </>
  );
}
>>>>>>> 8dfe7d25f290b91aa31693aa7bf49034b84bc498
