import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { github } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, status }) => {
  const isWorkInProgress =
    normalizeCategory(status) === "wip" ||
    tags.some((tag) => normalizeCategory(tag.name) === "in progress");

  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      animate="show"
      className="shell-card p-5 sm:w-[360px] w-full relative"
    >
      {isWorkInProgress && (
        <div className="absolute top-0 left-4 z-20 group">
          <div className="bg-[#1c7ea4] text-[#eaf8ff] text-[11px] font-semibold px-3 py-1 rounded-b-md shadow-[0_0_14px_rgba(54,179,226,0.35)]">
            WIP
          </div>
          <div className="mx-auto w-0 h-0 border-l-[10px] border-r-[10px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#1c7ea4]" />
          <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#66c7ef57] bg-[#0a1626f0] px-2 py-1 text-[11px] text-slate-200 opacity-0 transition group-hover:opacity-100 hidden sm:block">
            Work in progress - features are still being built
          </div>
        </div>
      )}

      <div className="relative w-full aspect-[18/11] overflow-hidden rounded-xl">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full border border-[#66c7ef57] bg-[radial-gradient(circle_at_20%_20%,rgba(35,80,120,0.6),rgba(10,18,32,0.95))] p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="terminal-chip">prototype</span>
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
        {isWorkInProgress && (
          <p className="mt-1 text-[12px] text-[#9bd5ef] sm:hidden">Work in progress</p>
        )}
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
