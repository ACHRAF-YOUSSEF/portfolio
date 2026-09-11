import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { homelabServices } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const architectureStages = [
  ["Internet", "Public request"],
  ["Cloudflare", "Encrypted edge"],
  ["Reverse proxy", "TLS and routing"],
  ["Docker Compose", "Declared stack"],
  ["Services", "30+ workloads"],
];

const stackHighlights = [
  "Compose-managed application stacks",
  "AdGuard Home with recursive Unbound DNS",
  "Cloudflare tunnels and reverse-proxy routing",
  "Media, cloud, automation, and local AI",
];

const tuiHighlights = [
  "Agentless monitoring over SSH",
  "Containers, processes, logs, and host metrics",
  "Keyboard controls for service operations",
  "Linux, macOS, and Windows targets",
];

const getPublicBadgeClass = (status) => {
  if (status === "Online") {
    return "border-[#2f8f5b59] text-emerald-300";
  }

  if (status === "Offline") {
    return "border-[#a13c3c66] text-rose-300";
  }

  return "border-[#5a8ec23f] text-slate-300";
};

const checkServiceAvailability = async (url, timeoutMs = 8000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    await fetch(url, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
      signal: controller.signal,
    });
    return "Online";
  } catch {
    return "Offline";
  } finally {
    clearTimeout(timeoutId);
  }
};

const Homelab = () => {
  const [publicStatus, setPublicStatus] = useState(() =>
    Object.fromEntries(
      homelabServices.public.map((service) => [service.name, "Checking"]),
    ),
  );

  useEffect(() => {
    let isActive = true;

    const updateStatuses = async () => {
      const checks = await Promise.all(
        homelabServices.public.map(async (service) => {
          const status = await checkServiceAvailability(
            service.healthUrl ?? service.url,
          );
          return [service.name, status];
        }),
      );

      if (isActive) {
        setPublicStatus(Object.fromEntries(checks));
      }
    };

    updateStatuses();
    const intervalId = setInterval(updateStatuses, 60000);

    return () => {
      isActive = false;
      clearInterval(intervalId);
    };
  }, []);

  const checkingStatuses = Object.values(publicStatus).some(
    (status) => status === "Checking",
  );
  const onlineCount = Object.values(publicStatus).filter(
    (status) => status === "Online",
  ).length;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Infrastructure</p>
        <h2 className={styles.sectionHeadText}>Homelab Control Plane</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-300 text-[17px] max-w-3xl leading-7.5"
      >
        From Compose file to live process: I built both the self-hosted stack
        and the terminal cockpit used to operate it.
      </motion.p>

      <motion.article
        variants={fadeIn("up", "spring", 0.1, 0.75)}
        className="mt-10 overflow-hidden rounded-2xl border border-[#58b8e64a] bg-[#08111f]/90 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#58b8e633] bg-[#0f1d2f]/80 px-5 py-4 sm:px-7">
          <p className="mono text-sm text-slate-300">
            <span className="text-[#a6e22e]">$</span> trace request --to
            homelab
          </p>
          <span className="terminal-chip whitespace-nowrap">30+ services</span>
        </div>

        <div className="border-b border-[#58b8e633] px-5 py-7 sm:px-7">
          <div className="relative mt-1">
            <div
              className="absolute left-[10%] right-[10%] top-2 hidden h-px bg-[#58b8e655] sm:block"
              aria-hidden="true"
            >
              <motion.span
                className="absolute -top-1.5 z-10 block size-3 -translate-x-1/2 rounded-full bg-[#a6e22e] shadow-[0_0_16px_rgba(166,226,46,0.9)]"
                animate={{
                  left: [
                    "0%",
                    "0%",
                    "25%",
                    "25%",
                    "50%",
                    "50%",
                    "75%",
                    "75%",
                    "100%",
                    "100%",
                    "100%",
                    "0%",
                    "0%",
                  ],
                  opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  times: [
                    0, 0.08, 0.2, 0.28, 0.4, 0.48, 0.6, 0.68, 0.8, 0.88,
                    0.92, 0.93, 1,
                  ],
                }}
              />
            </div>

            <ol
              className="relative grid grid-cols-2 gap-5 sm:grid-cols-5 sm:gap-x-0"
              aria-label="Public request path through the homelab"
            >
              {architectureStages.map(([name, detail]) => (
                <li
                  key={name}
                  className="flex items-center gap-3 last:col-span-2 sm:block sm:text-center sm:last:col-span-1"
                >
                  <span
                    className="block size-4 shrink-0 rounded-full border-2 border-[#58b8e6] bg-[#0b1524] sm:mx-auto"
                    aria-hidden="true"
                  />
                  <div className="sm:mt-3">
                    <p className="font-medium text-slate-100">{name}</p>
                    <p className="mono mt-0.5 text-[11px] text-slate-500">
                      {detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <section className="flex flex-col p-6 sm:p-8 lg:border-r lg:border-[#58b8e633]">
            <p className="mono text-sm text-[#58b8e6]">The stack</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-100">homelab</h3>
            <p className="mt-3 max-w-lg leading-7 text-slate-300">
              A privacy-first Docker Compose platform that turns one host into
              a personal cloud, media system, automation engine, and local AI
              environment.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {stackHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="text-[#a6e22e]" aria-hidden="true">
                    +
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://github.com/ACHRAF-YOUSSEF/homelab"
              target="_blank"
              rel="noreferrer"
              className="arch-button mt-8 inline-flex min-h-11 w-fit items-center rounded-lg px-5 py-2.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58b8e6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08111f]"
            >
              Explore the infrastructure
            </a>
          </section>

          <section className="min-w-0 bg-[#050911] p-4 sm:p-6">
            <div className="overflow-hidden rounded-xl border border-[#58b8e64a] bg-[#02050a]">
              <div className="flex items-center justify-between border-b border-[#58b8e633] px-4 py-3">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-rose-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-300/80" />
                  <span className="size-2.5 rounded-full bg-emerald-300/80" />
                </div>
                <p className="mono text-xs text-slate-500">homelab-tui</p>
              </div>
              <img
                src="https://raw.githubusercontent.com/ACHRAF-YOUSSEF/homelab-tui/main/assets/monitor.png"
                alt="homelab-tui monitor showing remote services and host metrics"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>

            <div className="px-1 pt-6 sm:px-2">
              <p className="mono text-sm text-[#a6e22e]">The cockpit</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-100">
                homelab-tui
              </h3>
              <ul className="mt-4 grid gap-2 text-sm text-slate-400 sm:grid-cols-2">
                {tuiHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/ACHRAF-YOUSSEF/homelab-tui"
                  target="_blank"
                  rel="noreferrer"
                  className="arch-button inline-flex min-h-11 items-center rounded-lg px-5 py-2.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58b8e6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050911]"
                >
                  View the terminal UI
                </a>
                <code className="rounded-md border border-[#58b8e633] bg-[#0b1524] px-3 py-2 text-xs text-slate-400">
                  npm i -g homelab-tui
                </code>
              </div>
            </div>
          </section>
        </div>
      </motion.article>

      <div className="mt-8">
        <motion.article
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="shell-card p-6 w-full"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-slate-100 text-2xl font-semibold">
              Live public endpoints
            </h3>
            <span className="terminal-chip whitespace-nowrap">
              {checkingStatuses
                ? "checking"
                : `${onlineCount}/${homelabServices.public.length} online`}
            </span>
          </div>
          <div className="mt-5 space-y-3">
            {homelabServices.public.map((service) => (
              <a
                key={service.name}
                href={service.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${service.name}`}
                className="block rounded-lg border border-[#58bfe740] bg-[#0f1d2f]/70 px-4 py-3 transition hover:border-[#70cff4a8] hover:bg-[#153451] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58b8e6]"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-slate-100 font-medium">{service.name}</p>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[11px] ${getPublicBadgeClass(
                      publicStatus[service.name],
                    )}`}
                  >
                    {publicStatus[service.name] ?? "Checking"}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.article>
      </div>
    </>
  );
};

export default SectionWrapper(Homelab, "homelab");
