import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-82px)] mx-auto flex items-center">
      <div className={`${styles.paddingX} max-w-7xl mx-auto w-full py-12`}>
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div className="space-y-6">
            <span className="terminal-chip">[achraf@archlinux ~]$ whoami</span>
            <h1 className={styles.heroHeadText}>
              Software engineer with a
              <span className="text-[#67c6f0]"> Linux-first </span>
              builder mindset.
            </h1>
            <p className={`${styles.heroSubText} max-w-2xl`}>
              I design practical apps across web, mobile, and backend systems.
              Clean architecture, automation, and self-hosted workflows are my
              daily tools.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="arch-button rounded-xl px-6 py-3 font-semibold"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-[#5bbfe85e] px-6 py-3 text-slate-200 hover:bg-[#17335061]"
              >
                Let&apos;s Build
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="shell-card p-5"
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
                <span className="text-[#7ed3fb]">$ </span>cat profile.txt
              </p>
              <p className="text-slate-300">name: Achraf Youssef</p>
              <p className="text-slate-300">focus: Kotlin, Rust, Full Stack</p>
              <p className="text-slate-300">os: Arch Linux</p>
              <p className="text-slate-300">status: Looking for internship 2026</p>
              <p>
                <span className="text-[#7ed3fb]">$ </span>
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 w-full flex justify-center items-center">
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
