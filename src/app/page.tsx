import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-green-400 via-green-300 to-green-500">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full text-white">
        {/* Colorful Hello World and tagline */}
        <div className="flex flex-col items-center w-full mb-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent drop-shadow-lg text-center">Hello World</h1>
          <p className="mt-2 text-xl sm:text-2xl font-semibold text-white text-center">this is vibe coding magic</p>
        </div>
        <Image
          className="dark:invert drop-shadow-lg"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-purple-900 px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold shadow-md">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em] text-blue-900">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white gap-2 hover:from-pink-600 hover:to-yellow-400 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto shadow-lg"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-blue-300 dark:border-purple-400 transition-colors flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-blue-900 hover:from-blue-300 hover:to-pink-300 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px] shadow-md"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-yellow-100 hover:text-yellow-300"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            className="filter drop-shadow-md"
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-pink-100 hover:text-pink-300"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            className="filter drop-shadow-md"
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-blue-100 hover:text-blue-300"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="filter drop-shadow-md"
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
