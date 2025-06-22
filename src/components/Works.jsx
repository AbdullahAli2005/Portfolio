import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { projects } from "../constants";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const DesktopProjectSection = ({ project, index }) => {
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
      {/* Text */}
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

      {/* Images */}
      <div className="flex flex-col sm:flex-row gap-5 w-full md:w-1/2">
        {project.images.map((img, i) => (
          <Tilt
            options={{ max: 25, scale: 1.1, speed: 200 }}
            key={i}
            className="rounded-xl bg-[#ffffff0a] p-1 shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            <img
              src={img}
              alt={`${project.name}-screen-${i}`}
              className="rounded-xl w-full sm:w-[180px] h-auto object-cover hover:scale-105 transition-transform"
              onError={(e) => (e.target.style.display = "none")}
            />
          </Tilt>
        ))}
      </div>
    </motion.div>
  );
};

const MobileProjectCard = ({ index, project }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-[#0c0c2c] p-5 rounded-2xl sm:w-[360px] w-full"
  >
    <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)]">
      <img
        src={project.cover_image[0]}
        alt={project.name}
        className="w-full h-full object-cover rounded-lg object-center"
        onError={(e) => (e.target.style.display = "none")}
      />
    </div>

    <div className="flex justify-between items-center">
      <h3 className="text-white font-bold text-[20px]">{project.name}</h3>
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

    <p className="mt-2 text-secondary text-[14px]">{project.description}</p>

    <div className="mt-3 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span key={tag.name} className={`text-[12px] ${tag.color}`}>
          #{tag.name}
        </span>
      ))}
    </div>
  </motion.div>
);

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
        Below are some of the applications and digital products I've developed, each crafted with attention to design, performance, and usability. These projects highlight my skills across UI/UX design, full-stack development, API integration, and solving real-world challenges through code.
      </motion.p>

      <div className="mt-20">
        {/* Mobile Layout */}
        <div className="block md:hidden flex flex-wrap gap-7 justify-center">
          {projects.map((project, index) => (
            <MobileProjectCard key={index} index={index} project={project} />
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {projects.map((project, index) => (
            <DesktopProjectSection key={index} index={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
