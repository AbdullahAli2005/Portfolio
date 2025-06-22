import React from "react";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";

const ProjectSection = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeIn(isEven ? "left" : "right", "spring", 0.3 * index, 0.75)}
      className={`
        flex flex-col
        md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
        items-start gap-10 my-20
      `}
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-5 md:mt-0">
        <div className="flex items-center ">
          <h3 className="text-white font-bold text-[28px]">{project.name}</h3>
          <div
            onClick={() => window.open(project.source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform ml-4"
            title="View on GitHub"
          >
            <img
              src={github}
              alt="Github"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
        </div>

        <p className="mt-3 text-secondary text-[16px]">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={`${project.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>

      {/* Image Section with Tilt and Glow */}
      <div className="flex flex-col sm:flex-row gap-5 w-full md:w-1/2">
        {project.images.map((img, i) => (
          // <Tilt
          //   key={i}
          //   options={{ max: 10, scale: 1.1, speed: 200 }} // Stronger tilt
          //   className="rounded-xl bg-[#ffffff0a] p-1 shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300"
          // >
          //   <img
          //     src={img}
          //     alt={`${project.name}-screen-${i}`}
          //     className="rounded-xl w-full sm:w-[180px] h-auto object-cover hover:scale-105 transition-transform"
          //   />
          // </Tilt>
          <div
            key={i}
            className="rounded-xl bg-[#ffffff0a] p-1 shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            <img
              src={img}
              alt={`${project.name}-screen-${i}`}
              className="rounded-xl w-full sm:w-[180px] h-auto object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Below are some of the mobile applications I’ve built using Flutter. Each project showcases different skills in UI/UX, backend integration, and real-world problem solving. Swipe through the UI previews and explore the tech stacks I used.
      </motion.p>

      <div className="mt-16">
        {projects.map((project, index) => (
          <ProjectSection key={index} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
