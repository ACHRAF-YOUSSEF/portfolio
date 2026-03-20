import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  const terminalEntries = [
    {
      command: "whoami",
      variant: "plain",
      output: ["achraf youssef"],
    },
    {
      command: "cat profile.txt",
      variant: "cat",
      filePath: "/home/achraf/.config/profile.txt",
      output: [
        { line: 1, key: "name", value: "Achraf Youssef" },
        { line: 2, key: "focus", value: "Kotlin, Rust, Full Stack" },
        { line: 3, key: "os", value: "Arch Linux" },
        { line: 4, key: "status", value: "Looking for internship 2026" },
      ],
    },
  ];
  const [entryIndex, setEntryIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const activeEntry = terminalEntries[entryIndex];
    let timer;
    const typingDelay = 140;
    const outputRevealDelay = activeEntry.variant === "cat" ? 900 : 700;
    const outputHoldDelay = activeEntry.variant === "cat" ? 5000 : 2600;

    if (typedCommand.length < activeEntry.command.length) {
      timer = setTimeout(() => {
        setTypedCommand(activeEntry.command.slice(0, typedCommand.length + 1));
      }, typingDelay);
    } else if (showOutput) {
      timer = setTimeout(() => {
        setTypedCommand("");
        setShowOutput(false);
        setEntryIndex((prev) => (prev + 1) % terminalEntries.length);
      }, outputHoldDelay);
    } else {
      timer = setTimeout(() => setShowOutput(true), outputRevealDelay);
    }

    return () => clearTimeout(timer);
  }, [entryIndex, showOutput, typedCommand]);

  return (
    <section className="relative w-full min-h-[calc(100vh-82px)] mx-auto flex items-center py-8 sm:py-12">
      <div className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-10 items-center">
          <div className="space-y-5 sm:space-y-6">
            <span className="terminal-chip">[achraf@archlinux ~]$ whoami</span>
            <h1 className={styles.heroHeadText}>
              Software engineer with a {" "}
              <span className="text-[#67c6f0]">Linux-first</span>{" "}
              builder mindset.
            </h1>
            <p className={`${styles.heroSubText} max-w-2xl text-slate-300/95`}>
              I design practical apps across web, mobile, and backend systems.
              Clean architecture, automation, and self-hosted workflows are my
              daily tools.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="arch-button inline-flex items-center justify-center rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 font-semibold no-underline"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#5bbfe85e] px-5 sm:px-6 py-2.5 sm:py-3 text-slate-200 hover:bg-[#17335061] no-underline transition"
              >
                Let&apos;s Build
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="shell-card p-4 sm:p-5"
          >
            <div className="flex items-center justify-between border-b border-[#55bae041] pb-3">
              <p className="mono text-sm text-[#9fd8f3]">terminal</p>
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f56c6c]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#e5c07b]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#98c379]" />
              </div>
            </div>

            <div className="mono text-sm sm:text-base text-slate-200 space-y-3 pt-4">
              <p>
                <span className="text-[#a6e22e]">&gt; </span>
                <span className="text-[#a6e22e]">{typedCommand}</span>
                <span className="animate-pulse text-[#a6e22e]">_</span>
              </p>
              {showOutput && (
                terminalEntries[entryIndex].variant === "cat" ? (
                  <div className="rounded-md border border-[#6f85a040] bg-[#0c1020]/85 overflow-hidden">
                    <div className="px-3 py-2 border-b border-[#6f85a040] text-[#d7dde8]">
                      File: {terminalEntries[entryIndex].filePath}
                    </div>
                    <div className="px-3 py-2 space-y-1">
                      {terminalEntries[entryIndex].output.map((row) => (
                        <p key={`${row.line}-${row.key}`} className="flex gap-3">
                          <span className="w-5 text-right text-[#7b8394]">{row.line}</span>
                          <span className="text-[#ff5fa2]">{row.key}</span>
                          <span className="text-[#f0e68c]">=</span>
                          <span className="text-[#f8f8f2]">{row.value}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {terminalEntries[entryIndex].output.map((line) => (
                      <p key={line} className="text-[#f8f8f2]">
                        {line}
                      </p>
                    ))}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 w-full hidden sm:flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#4fb3df81] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#7ad1f7] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
