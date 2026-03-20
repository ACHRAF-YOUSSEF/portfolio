import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { homelabServices } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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
      homelabServices.public.map((service) => [service.name, "Checking"])
    )
  );

  useEffect(() => {
    let isActive = true;

    const updateStatuses = async () => {
      const checks = await Promise.all(
        homelabServices.public.map(async (service) => {
          const status = await checkServiceAvailability(service.url);
          return [service.name, status];
        })
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

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Infrastructure</p>
        <h2 className={styles.sectionHeadText}>Homelab Services</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-300 text-[17px] max-w-3xl leading-[30px]"
      >
        Selected self-hosted apps are exposed securely for public access.
        Availability is checked automatically and updates live.
      </motion.p>

      <div className="mt-10">
        <motion.article
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="shell-card p-6 w-full"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-slate-100 text-2xl font-semibold">Public Services</h3>
            <span className="terminal-chip">online</span>
          </div>
          <div className="mt-5 space-y-3">
            {homelabServices.public.map((service) => (
              <a
                key={service.name}
                href={service.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${service.name}`}
                className="block rounded-lg border border-[#58bfe740] bg-[#0f1d2f]/70 px-4 py-3 hover:border-[#70cff4a8] hover:bg-[#153451] transition"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-slate-100 font-medium">{service.name}</p>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[11px] ${getPublicBadgeClass(
                      publicStatus[service.name]
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
