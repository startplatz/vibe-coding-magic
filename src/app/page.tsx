"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [notTodos, setNotTodos] = useState<string[]>([]);

  const addNotTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setNotTodos([input.trim(), ...notTodos]);
      setInput("");
    }
  };

  const removeNotTodo = (idx: number) => {
    setNotTodos(notTodos.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-400 via-green-300 to-green-500 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-md flex flex-col items-center text-white">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent drop-shadow-lg text-center mb-2">Not Todo List</h1>
        <p className="mb-8 text-xl sm:text-2xl font-semibold text-white text-center">Things I will <span className="line-through">do</span> <span className="text-green-900 font-bold">NOT</span> do today</p>
        <form onSubmit={addNotTodo} className="flex w-full gap-2 mb-6">
          <input
            className="flex-1 rounded-l px-4 py-2 text-green-900 bg-white placeholder:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            type="text"
            placeholder="Add a not todo..."
            value={input}
            onChange={e => setInput(e.target.value)}
            aria-label="Add a not todo"
          />
          <button
            type="submit"
            className="rounded-r bg-green-700 hover:bg-green-800 text-white px-4 py-2 font-semibold transition-colors"
          >
            Add
          </button>
        </form>
        <ul className="w-full space-y-3">
          {notTodos.length === 0 && (
            <li className="text-center text-white/80 italic">Nothing to not do yet!</li>
          )}
          {notTodos.map((item, idx) => (
            <li key={idx} className="flex items-center justify-between bg-white/80 text-green-900 rounded px-4 py-2 shadow">
              <span>{item}</span>
              <button
                onClick={() => removeNotTodo(idx)}
                className="ml-4 text-sm text-red-600 hover:text-red-800 font-bold px-2 py-1 rounded transition-colors"
                aria-label={`Remove not todo: ${item}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </main>
      <footer className="w-full flex justify-center items-center py-4 mt-10 text-white text-lg font-medium bg-green-700/70 rounded shadow-lg">
        <span>with love from cologne &middot; {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </footer>
    </div>
  );
}
