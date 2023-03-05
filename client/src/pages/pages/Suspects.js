import { useRouter } from 'next/router'


export default function Suspects () {
    const router = useRouter()
    return ( 
    <>
    <div className="suspects">
    
    <h1>Suspects</h1>

    <button type="button" onClick={() => router.push('/quiz')}>Click Me</button>

    </div>

    </>

    )
}