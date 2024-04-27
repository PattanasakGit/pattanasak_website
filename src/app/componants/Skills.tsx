import React from "react";
import { BGEffect, CustomText, TopicEffect } from "@/utils/ColorEffect";

const Skills: React.FC = () => {
    const mySkills = ["React", "Next.js", "Tailwind", "CSS", "Figma", "Express.js", "Node.js", "SQL", "MongoDB", "Docker", "JavaScript", "TypeScript", "GitHub", "GitLab", "Jira", "Scrum"];

    const getRandomPastelColor = () => {
        const letters = 'BCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color+'60';
    };

    return(
        <BGEffect className="pt-3 p-8 rounded-[50px] w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] my-4">
            <TopicEffect className="text-[35px]">SKILLS</TopicEffect>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                {mySkills.map((skill, index) => (
                    <div key={index} className="rounded-3xl p-4 shadow-xl" style={{ backgroundColor: getRandomPastelColor() }}>
                        <CustomText className="text-lg font-semibold text-center ">{skill}</CustomText>
                    </div>
                ))}
            </div>
        </BGEffect>
    );
};

export default Skills;
