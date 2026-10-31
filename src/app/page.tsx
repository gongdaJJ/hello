"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">你好，这是我的第一个页面</h1>
      <p className="mt-4 text-lg">你点了 {count} 次</p>
      <button
        className="mt-4 rounded bg-black px-4 py-2 text-white"
        onClick={() => setCount(count + 1)}
      >
        加一
      </button>
    </main>
  );
}