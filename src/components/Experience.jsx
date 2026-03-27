import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.1, 0.7)}
    className="shell-card p-6"
  >
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#0f2f47] border border-[#5cc3ec4a] grid place-items-center shrink-0">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-7 h-7 object-contain"
          />
        </div>
        <div>
          <h3 className="text-slate-100 text-[22px] font-bold">
            {experience.title}
          </h3>
          <p className="text-[#8fd6fa] text-[15px]">{experience.company_name}</p>
        </div>
      </div>

      <p className="terminal-chip self-start shrink-0">{experience.date}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, pointIndex) => (
        <li
          key={`${experience.company_name}-${point}-${pointIndex}`}
          className="text-slate-300 text-[14px] pl-1"
        >
          {point}
        </li>
      ))}
    </ul>
  </motion.article>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Career</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>

      <div className="mt-10 grid gap-5">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company_name}-${experience.date}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
