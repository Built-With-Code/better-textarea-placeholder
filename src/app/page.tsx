"use client";

import { ArrowUp } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");

  const sampleInputs = [
    "Brainstorm podcast episode ideas",
    "Explain this code",
    "Help me improve this job description",
    "Teach me to negotiate",
    "Design a database schema",
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-12 min-h-screen max-w-[80%] mx-auto p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-medium text-3xl">What can I help with?</h1>
      <div className="relative bg-muted rounded-xl w-full p-3">
        <form>
          <textarea
            rows={3}
            className="w-full resize-none outline-none bg-transparent"
            autoFocus
            placeholder="Enter query"
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="float-end p-2 bg-white rounded-full text-black [&:disabled]:bg-muted-foreground/30 [&:disabled]:text-foreground/30"
            disabled={userInput.length == 0}
            type="submit"
          >
            <ArrowUp />
          </button>
        </form>
      </div>
    </div>
  );
}
