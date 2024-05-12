import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  
  return (
    <>
      <header className="absolute bg-obed-light h-[40vh] w-[414px] rounded-bl-[50%] rounded-br-[40%]">
        <h1 className="text-3xl mt-24 text-center">CiaoChow</h1>
      </header>
      <main className="flex min-h-screen flex-col bg-obed-dark items-center justify-between p-14 pt-60">
        <img 
          className="relative" 
          src="/people.png" 
          width={500}
          height={500}
          alt="People" />
        <p>Hungry? <b>CiaoChow</b> helps you find something to eat.</p>
        <button 
          className="bg-obed hover:bg-obed-light hover:text-white hover:border hover:border-white text-dark font-bold py-2 px-4 rounded w-full" 
          onClick={() => router.push('/register', { scroll: false })}>
            Get Started
        </button>
      </main>
    </>
  );
}
