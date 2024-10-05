import Carousel from "@/components/Carousel/CarouselComponat";
import { CustomText } from "@/utils/ColorEffect";
import React from "react";
import { motion } from "framer-motion";

interface ProjectSectionProps {
  data: IOneProject;
  index: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ data, index }) => {
  const direction = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      initial={{ x: direction, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className=" rounded-[50px] p-4 my-8 mx-2"
    >
      <Carousel slides={data.images} />
      <a href={data.github} target="_blank" rel="noopener noreferrer">
        <CustomText className="text-[20px] font-semibold px-4 mt-10 text-center hover:underline">
          {` ${data.name} `}
        </CustomText>
      </a>
      <CustomText className="font-light mb-10 px-8 py-4 rounded-3xl">
        &emsp;&emsp;{data.description}
      </CustomText>
      <div className="flex flex-wrap justify-center mt-8">
        {data.tools.map((tool, index) => (
          <div
            key={index}
            className="rounded-3xl p-2 mx-2 shadow-[5px_5px_20px_0px_rgba(0,0,0,0.05)] bg-[#ffffff18] mb-4 border border-[#c6af71]"
          >
            <CustomText className="text-sm font-light text-center">
              {tool}
            </CustomText>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectSection;
