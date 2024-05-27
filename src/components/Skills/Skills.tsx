import React from "react";
import { BGEffect, CustomText, TopicEffect } from "@/utils/ColorEffect";
import { getRandomPastelColor } from "@/utils/RandomColor";
import { useDarkModeState } from "@/store/DarkModeState";

// Import the necessary icons from react-icons
import { SiReact, SiNextdotjs, SiTailwindcss, SiCss3, SiHtml5, SiJavascript, SiTypescript, SiNodedotjs, SiFigma, SiExpress, SiPostgresql, SiMongodb, SiDocker, SiGithub, SiScrumalliance, SiPostman } from 'react-icons/si';
import { RiJavascriptLine, RiTeamFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";

const Skills: React.FC = () => {
    const isDarkMode = useDarkModeState().isDarkMode;
    const mySkills = [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "JavaScript", icon: <RiJavascriptLine /> },
        { name: "TypeScript", icon: <TbBrandTypescript /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "SQL", icon: <PiFileSql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Agile", icon: <RiTeamFill /> },
        { name: "Postman", icon: <SiPostman /> },
    ];

    return (
        <BGEffect className="pt-3 p-8 rounded-[50px] w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] my-4">
            <TopicEffect className="text-center md:text-left text-[35px]">SKILLS</TopicEffect>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                {mySkills.map((skill, index) => (
                    <div key={index} className="rounded-3xl p-4 shadow-xl flex flex-col items-center" style={{ backgroundColor: getRandomPastelColor(isDarkMode) }}>
                        <CustomText className="text-4xl mb-2">
                            {skill.icon}
                        </CustomText>
                        <CustomText className="text-lg font-semibold text-center">{skill.name}</CustomText>
                    </div>
                ))}
            </div>
        </BGEffect>
    );
};

export default Skills;
