/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectCategory = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] hover:border-white border-slate-600";

  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

const Works = () => {
  const categories = [
    "All",
    "Academic Projects",
    "Personal Projects",
    "Desktop",
    "Mobile",
    "Web",
  ];
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Following projects showcase my skills and experience throughout
          real-world examples of my work.
          <br />
          It reflects my ability to solve complex problems, work with different
          tchnologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="text-white flex-row justify-center items-center mt-10 flex flex-wrap gap-7">
        {categories.map((name, index) => (
          <ProjectCategory
            key={name}
            index={index}
            onClick={handleCategoryChange}
            name={name}
            isSelected={category === name}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-7">
        {projects
          .filter((project) => project.category.includes(category))
          .map((project, index) => (
            <ProjectCard
              key={`project-${index}-${category}`}
              index={index}
              {...project}
            />
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
