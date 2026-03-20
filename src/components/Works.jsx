import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { github } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const isWorkInProgress = tags.some(
    (tag) => normalizeCategory(tag.name) === "in progress"
  );

  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      animate="show"
      className="shell-card p-5 sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[220px]">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover rounded-xl" />
        ) : (
          <div className="w-full h-full rounded-xl border border-[#66c7ef57] bg-[radial-gradient(circle_at_20%_20%,rgba(35,80,120,0.6),rgba(10,18,32,0.95))] p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="terminal-chip">prototype</span>
              {isWorkInProgress && (
                <span className="rounded-full border border-[#e2c86d5f] bg-[#e2c86d1a] px-2 py-0.5 text-[11px] text-[#f0dc96]">
                  Work In Progress
                </span>
              )}
            </div>

            <div className="mono text-[#c6d6e8] text-sm leading-6">
              <p>
                <span className="text-[#a6e22e]">&gt; </span>{name.toLowerCase()}
              </p>
              <p className="text-slate-300">status: active development</p>
              <p className="text-slate-300">preview: coming soon</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <button
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-[#66c7ef57]"
            onClick={() => window.open(source_code_link, "_blank")}
            aria-label={`Open ${name} source code`}
            type="button"
          >
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </button>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-slate-100 font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-slate-400 text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.article>
  );
};

const ProjectCategory = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`category-btn ${
        isSelected ? "active" : ""
      } rounded-full border px-5 py-2 text-sm sm:text-base cursor-pointer transition`}
      type="button"
    >
      {name}
    </button>
  );
};

const normalizeCategory = (value) => String(value ?? "").trim().toLowerCase();

const projectHasCategory = (project, selectedCategory) => {
  if (normalizeCategory(selectedCategory) === "all") {
    return true;
  }

  if (Array.isArray(project.category)) {
    return project.category.some(
      (category) => normalizeCategory(category) === normalizeCategory(selectedCategory)
    );
  }

  return normalizeCategory(project.category) === normalizeCategory(selectedCategory);
};

const preferredCategoryOrder = [
  "All",
  "Academic Projects",
  "Personal Projects",
  "Desktop",
  "Mobile",
  "Web",
];

const Works = () => {
  const categories = useMemo(() => {
    const availableCategories = projects.flatMap((project) =>
      Array.isArray(project.category) ? project.category : [project.category]
    );

    const uniqueCategories = [
      "All",
      ...new Set(
        availableCategories.filter(
          (category) => category && normalizeCategory(category) !== "all"
        )
      ),
    ];

    const orderedPreferred = preferredCategoryOrder.filter((category) =>
      uniqueCategories.some(
        (availableCategory) =>
          normalizeCategory(availableCategory) === normalizeCategory(category)
      )
    );

    const customCategories = uniqueCategories.filter(
      (category) =>
        !preferredCategoryOrder.some(
          (preferredCategory) =>
            normalizeCategory(preferredCategory) === normalizeCategory(category)
        )
    );

    return [...orderedPreferred, ...customCategories];
  }, []);

  const [category, setCategory] = useState("All");

  const filteredProjects = useMemo(
    () => projects.filter((project) => projectHasCategory(project, category)),
    [category]
  );

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <p className={styles.sectionSubText}>Portfolio</p>
        <h2 className={styles.sectionHeadText}>Selected Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-4 text-slate-300 text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate="show"
        >
          A curated set of projects built across academic and personal tracks.
          Each one reflects problem-solving, product thinking, and full-cycle
          implementation from design to deployment.
        </motion.p>
      </div>

      <div className="text-white mt-8 flex flex-wrap gap-3">
        {categories.map((name) => (
          <ProjectCategory
            key={name}
            onClick={handleCategoryChange}
            name={name}
            isSelected={category === name}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-7">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={`${project.name}-${category}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
