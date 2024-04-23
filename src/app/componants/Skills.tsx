import React from "react";
import { BGEffect, CustomText, TopicEffect } from "@/utils/ColorEffect";
import { IconDownload } from '@tabler/icons-react';

const Skills: React.FC = () => {
    return(
        <BGEffect className="pt-3 p-8 rounded-[50px]  w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] my-4">
            <TopicEffect className="text-[35px]" > SKILLS </TopicEffect>
            <CustomText className="ml-8 text-[20px] font-semibold my-4"> {'< Stack >'} </CustomText>

            <CustomText className="ml-8 text-[20px] font-semibold my-4"> {'< Soft >'} </CustomText>
        </BGEffect>
    );
};

export default Skills;