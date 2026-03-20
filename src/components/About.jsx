import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.1, 0.7)}
      className="shell-card p-6 w-full"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#11324b] border border-[#67c7ef47] grid place-items-center">
          <img src={icon} alt={title} className="w-7 h-7 object-contain" />
        </div>
        <h3 className="text-slate-100 font-semibold text-[20px]">{title}</h3>
      </div>
      <p className="text-slate-400 text-sm mt-4">
        Shipping reliable features with maintainable code and thoughtful UX.
      </p>
    </motion.article>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        className="mt-6 text-slate-300 text-[17px] max-w-4xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a software engineering student focused on building products that
        feel robust and practical in real-world use. My workflow is heavily
        Linux-oriented, with strong interests in Kotlin multiplatform, backend
        systems, and clean frontend architecture.
        <br />
        <br />
        Beyond coursework, I run self-hosted services, automate infrastructure,
        and experiment with Rust and system-level tooling. I enjoy working on
        products from idea to deployment while keeping performance and developer
        experience in mind.
      </motion.p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
