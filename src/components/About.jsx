import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, description }) => {
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
      <p className="text-slate-400 text-sm mt-4">{description}</p>
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
        I am a software engineering student focused on full stack product
        development, from frontend user experience to backend APIs and data
        layers. I enjoy building software that is reliable, maintainable, and
        useful in real-world workflows.
        <br />
        <br />
        Beyond web platforms, I build desktop applications and self-hosted
        tooling, with a Linux-first workflow centered on automation,
        performance, and clean architecture.
      </motion.p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
