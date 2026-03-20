import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { techCategories } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Stack</p>
        <h2 className={styles.sectionHeadText}>Tech Arsenal</h2>
      </motion.div>

      <div className="mt-10 space-y-8">
        {techCategories.map((category, categoryIndex) => (
          <motion.section
            key={category.title}
            variants={fadeIn("up", "spring", categoryIndex * 0.08, 0.7)}
            className="shell-card p-5 sm:p-6"
          >
            <h3 className="text-slate-100 text-lg sm:text-xl font-semibold mb-4">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {category.items.map((technology, techIndex) => (
                <motion.div
                  key={technology.name}
                  variants={fadeIn("up", "spring", techIndex * 0.03, 0.55)}
                  className="rounded-xl border border-[#58bfe740] bg-[#0f1d2f]/70 px-3 py-4 flex flex-col items-center gap-3"
                >
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-10 h-10 object-contain"
                  />
                  <p className="text-slate-200 text-sm text-center">{technology.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "stack");
