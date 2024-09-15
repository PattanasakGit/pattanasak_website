import { ExperiencesData } from "@/store/Data";
import { CustomText, TopicEffect } from "@/utils/ColorEffect";
import React from "react";
import { FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const Experiences: React.FC = () => {
  return (
    <div className="pt-3 p-8 rounded-[50px] w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] my-4">
      <TopicEffect className="text-center md:text-left text-[35px] text-orange-600 mb-8">
        WORK EXPERIENCES
      </TopicEffect>

      <div className="relative">
        <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-1 bg-orange-300 hidden sm:block"></div>

        {ExperiencesData.map((experience, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col sm:flex-row items-start sm:items-center ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <div className="absolute left-0 sm:left-1/2 w-8 h-8 bg-orange-500 rounded-full shadow-lg flex items-center justify-center transform sm:-translate-x-1/2 z-10">
              <FaBriefcase className="text-white" />
            </div>

            <div className="ml-12 sm:ml-0 sm:w-[45%]">
              <div
              style={{border: "2px solid #ffffff10"}}
                className={`bg-[ffffff10] p-6 rounded-3xl shadow-md ${
                  index % 2 === 0 ? "sm:mr-12" : "sm:ml-12"
                }`}
              >
                <h3 className="text-[20px] text-xl font-bold text-orange-600 mb-2">
                  {experience.position}
                </h3>
                <CustomText className="text-[15px] font-semibold text-orange-700">
                  {experience.company.toLocaleUpperCase()}
                </CustomText>
                <hr className="h-[2px] bg-yellow-400 border-none rounded-xl my-[1vw]" />
                <CustomText className="text-[15px] text-orange-600 mb-3 flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {experience.year}
                </CustomText>
                <CustomText className="text-[16px] text-gray-700">
                  &emsp;{experience.detail}
                </CustomText>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
