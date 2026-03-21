import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ContactInfo = ({ label, value, href, isLink = false }) => {
  const content = (
    <div className="flex items-start gap-4">
      <span className="text-[#00d4ff] font-mono text-sm min-w-fit">~/{label}:</span>
      <span className="text-slate-300">{value}</span>
    </div>
  );

  if (isLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group hover:text-[#00d4ff] transition-colors duration-300 block"
      >
        {content}
      </a>
    );
  }

  return content;
};

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_yw5x5kr",
        "template_dmuxt8k",
        {
          from_name: form.name,
          to_name: "Achraf youssef",
          from_email: form.email,
          to_email: "yachraf403@gmail.com",
          message: form.message,
        },
        "6UW1CEpnbQ_9hJQPo"
      )
      .then(
        () => {
          setLoading(false);
          setFeedback("success");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setFeedback(""), 3000);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          console.log(error);
          setFeedback("error");
          setTimeout(() => setFeedback(""), 3000);
        }
      );
  };

  return (
    <div className="w-full">
      <motion.div variants={textVariant()} initial="hidden" animate="show" className="mb-8">
        <p className={styles.sectionSubText}>What&apos;s next?</p>
        <h2 className={styles.sectionHeadText}>Get In Touch</h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <motion.div
          variants={fadeIn("up", "spring", 0, 0.75)}
          initial="hidden"
          animate="show"
          className="lg:col-span-1 space-y-6"
        >
          <div className="shell-card p-6 hover:border-[#00d4ff] transition-colors duration-300">
            <p className="terminal-chip mb-4">email</p>
            <ContactInfo
              label="contact"
              value="yachraf403@gmail.com"
              href="mailto:yachraf403@gmail.com"
              isLink
            />
          </div>

          <div className="shell-card p-6">
            <p className="terminal-chip mb-4">status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse"></div>
              <span className="text-slate-300">Available for internships</span>
            </div>
            <p className="text-slate-400 text-sm mt-2">Looking for 2026 opportunities</p>
          </div>

          <div className="shell-card p-6">
            <p className="terminal-chip mb-4">location</p>
            <ContactInfo label="base" value="Tunisia" />
          </div>

          <div className="shell-card p-6">
            <p className="terminal-chip mb-4">socials</p>
            <div className="space-y-3">
              <ContactInfo
                label="github"
                value="ACHRAF-YOUSSEF"
                href="https://github.com/ACHRAF-YOUSSEF"
                isLink
              />
              <ContactInfo
                label="linkedin"
                value="achraf-youssef-4768b1251"
                href="https://linkedin.com/in/achraf-youssef-4768b1251"
                isLink
              />
              <ContactInfo
                label="cv"
                value="open resume"
                href="/portfolio/cv.pdf"
                isLink
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          initial="hidden"
          animate="show"
          className="lg:col-span-2 shell-card p-8"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-slate-100 font-medium text-sm block">
                <span className="text-[#00d4ff]">$</span> Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="your name"
                required
                className="w-full bg-[#0f1d2f] py-3 px-4 placeholder:text-slate-600 text-slate-100 rounded-lg outline-none border border-[#58bfe740] focus:border-[#00d4ff] focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-slate-100 font-medium text-sm block">
                <span className="text-[#00d4ff]">$</span> Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your email"
                required
                className="w-full bg-[#0f1d2f] py-3 px-4 placeholder:text-slate-600 text-slate-100 rounded-lg outline-none border border-[#58bfe740] focus:border-[#00d4ff] focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-slate-100 font-medium text-sm block">
                <span className="text-[#00d4ff]">$</span> Message
              </label>
              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="your message here..."
                required
                className="w-full bg-[#0f1d2f] py-3 px-4 placeholder:text-slate-600 text-slate-100 rounded-lg outline-none border border-[#58bfe740] focus:border-[#00d4ff] focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all duration-300 resize-none"
              />
            </div>

            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-4 rounded-lg text-sm font-medium ${
                  feedback === "success"
                    ? "bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30"
                    : "bg-red-500/10 text-red-400 border border-red-500/30"
                }`}
              >
                {feedback === "success"
                  ? "✓ Message sent successfully! I'll get back to you soon."
                  : "✗ Something went wrong. Please try again."}
              </motion.div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="relative group px-8 py-3 font-semibold text-slate-100 overflow-hidden rounded-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#0099ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-[#0f1d2f] group-hover:bg-transparent transition-colors duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <span className="text-[#00d4ff] group-hover:text-slate-100 transition-colors">$</span>
                  {loading ? "sending..." : "send message"}
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        initial="hidden"
        animate="show"
        className="text-center text-slate-400 text-sm"
      >
        <p>
          Or reach out directly at{" "}
          <a
            href="mailto:yachraf403@gmail.com"
            className="text-[#00d4ff] hover:text-[#00ffff] transition-colors font-medium"
          >
            yachraf403@gmail.com
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
