import React from "react";
import { BGEffect, CustomText, TopicEffect } from "@/utils/ColorEffect";
import { IconDownload } from '@tabler/icons-react';

const Contact: React.FC = () => {
    return(
        <div className="pt-3 p-8 rounded-[50px]  w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] my-4">
            <TopicEffect className="text-[35px]" > CONTACT </TopicEffect>
        </div>
    );
};

export default Contact;