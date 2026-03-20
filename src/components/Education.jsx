import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academics</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-10 grid gap-5">
        {education.map((item, index) => (
          <motion.article
            key={`${item.school}-${item.date}`}
            variants={fadeIn("up", "spring", index * 0.1, 0.7)}
            className="shell-card p-6"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-slate-100 text-[22px] font-bold">{item.degree}</h3>
                <p className="text-[#8fd6fa] text-[15px] mt-1">{item.school}</p>
              </div>
              <p className="terminal-chip">{item.date}</p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              {item.details.map((detail) => (
                <li key={`${item.school}-${detail}`} className="text-slate-300 text-[14px] pl-1">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
