"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");

  const sampleInputs = [
    "Brainstorm podcast episode ideas",
    "Explain this code",
    "Help me improve this job description",
    "Teach me to negotiate",
    "Design a database schema",
  ];
  const [sampleInputIndex, setSampleInputIndex] = useState(0);

  useEffect(() => {
    if (userInput.length > 0) return;

    const interval = setInterval(() => {
      setSampleInputIndex((prev) => (prev + 1) % sampleInputs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [userInput]);

  return (
    <div className="flex flex-col justify-center items-center gap-12 min-h-screen max-w-[80%] mx-auto p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-medium text-3xl">What can I help with?</h1>
      <div className="relative bg-muted rounded-xl w-full p-3">
        <div
          className="[&[data-feedback=true]]:opacity-0"
          data-feedback={userInput ? "true" : "false"}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              aria-hidden
              className="absolute left-3 top-3 w-full text-muted-foreground"
              key={sampleInputIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0 }}
            >
              {sampleInputs[sampleInputIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
        <form>
          <textarea
            rows={3}
            className="w-full resize-none outline-none [&::placeholder]:opacity-0 bg-transparent"
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
