import React from "react";
import { BGEffect, CustomText, TopicEffect } from "@/utils/ColorEffect";
import { IconDownload } from '@tabler/icons-react';
import Image from 'next/image'

const AboutMe: React.FC = () => {
    return(
        <BGEffect className="pt-3 p-8 rounded-[50px]  w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] my-4">
            <TopicEffect className="text-[35px]" > ABOUT ME </TopicEffect>
            <CustomText className="text-[20px] font-semibold my-4"> {'< A Software Developer Passionate About Creation >'} </CustomText>
            <div className="flex flex-col md:flex-row my-10">
                <div className="w-full md:w-[65%] px-4 py-2">
                    <hr className="h-[2px] bg-yellow-400 border-none rounded-xl mb-[3vw]" />
                    <CustomText className="my-4">
                        &emsp; I am a software developer with a heart for writing code to create programs that meet users' needs. I view coding as akin to creating a masterpiece of art on a computer screen, blending precision, creativity, and efficiency to produce outstanding and unique results.
                    </CustomText>
                    <CustomText className="my-4">
                        &emsp;Moreover, I am someone who delights in continually learning and keeping up with new technology trends in order to develop my skills and abilities to stay ahead of the ever-changing digital world. I am dedicated to designing and developing highly efficient, user-friendly, and impressively beautiful creations.
                    </CustomText>
                    <hr className="h-[2px] bg-yellow-400 border-none rounded-xl mt-[3vw]" />
                </div>
                <div className="w-full md:w-[35%] text-white px-4 py-2 flex flex-col items-center">
                    <Image src={"/avatar/hello.gif"} alt="avatar" height={300} width={300} className="mt-[-2vw]"/>
                    <button 
                        className="flex justify-center bg-orange-500 py-4 my-8 w-[90%] rounded-2xl border border-gray-400 hover:bg-orange-600"
                    >
                        <IconDownload stroke={2} className="mx-2"/>
                        Download CV
                    </button>
                </div>
                
            </div>
        </BGEffect>
    );
};

export default AboutMe;