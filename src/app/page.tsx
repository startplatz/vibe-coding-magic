import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-green-400 via-green-300 to-green-500">
      <main className="flex flex-col gap-[32px] items-center w-full text-white">
        {/* Colorful Hello World and tagline */}
        <div className="flex flex-col items-center w-full mb-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent drop-shadow-lg text-center">Hello World</h1>
          <p className="mt-2 text-xl sm:text-2xl font-semibold text-white text-center">this is vibe coding magic</p>
        </div>
      </main>
    </div>
  );
}
