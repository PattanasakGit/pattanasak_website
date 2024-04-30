import React from "react";
import { BGEffect, CustomText, TopicEffect } from "@/utils/ColorEffect";
import { getRandomPastelColor } from "@/utils/RandomColor";
import { useDarkModeState } from "@/store/DarkModeState";

const Skills: React.FC = () => {
    const isDarkMode = useDarkModeState().isDarkMode;
    const mySkills = [
        "React", "Next.js", "Tailwind", "CSS", "HTML", "JavaScript", "TypeScript", "Node.js", "Figma", "Express.js", "SQL", "MongoDB"
        , "Docker", "GitHub", "Scrum", "Postman"];

    return(
        <BGEffect className="pt-3 p-8 rounded-[50px] w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] my-4">
            <TopicEffect className="text-center md:text-left text-[35px]">SKILLS</TopicEffect>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                {mySkills.map((skill, index) => (
                    <div key={index} className="rounded-3xl p-4 shadow-xl" style={{ backgroundColor: getRandomPastelColor(isDarkMode) }}>
                        <CustomText className="text-lg font-semibold text-center ">{skill}</CustomText>
                    </div>
                ))}
            </div>
        </BGEffect>
    );
};

export default Skills;
