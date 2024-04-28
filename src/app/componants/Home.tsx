import { CustomText, TopicEffect } from "@/utils/ColorEffect";
import React from "react";
import Image from 'next/image'
import { IconBrandGithub } from '@tabler/icons-react';
import Typewriter from 'react-ts-typewriter';

const Home: React.FC = () => {
    const CustomBTN = 'w-[100px] h-[30px] p-8 bg-[#ffffff05] rounded-[50px]  border-[#c6af71] flex justify-center items-center  hover:scale-[1.2] shadow-[5px_5px_20px_0px_rgba(0,0,0,0.1)]';
    const hendleClickGithub = () => {
        window.open("https://github.com/PattanasakGit", "_blank");
    }
    return (
      <div className=" w-full py-10 grid grid-cols-1 place-items-center place-content-start">
        <Image
          src="/profile.jpg"
          alt="profile image"
          width={350}
          height={200}
          className="rounded-[150px] mb-2"
        />
        <TopicEffect className="my-8 text-[60px]"> I’m Pattanasak </TopicEffect>
        <CustomText className="text-[30px] font-bold mb-4">
          <Typewriter
            text={['< Web developer >', '< Frontend developer >','< Fullstack developer >']}
            speed={150}
            cursor={true}
            loop={true}
          />
       </CustomText>
        {/* <CustomText className="text-[17px] w-[80%] sm:w-[70%] md:w-[65%] lg:w-[50%] xl:w-[45%]"> 
                &emsp;&emsp;"My main job is to translate ideas into vibrant code, in order to deliver the bestpossible experience to every user. Creating programs and websites that meet users' needs is what brings me immense happiness and pride. "
            </CustomText> */}
        <div className="flex flex-wrap items-center justify-center  md:w-[60%] gap-4 my-8"> 
          <button className={CustomBTN} onClick={hendleClickGithub}>
            <CustomText>
                <IconBrandGithub stroke={2} size={50}/>  
            </CustomText>
          </button>
        </div>
      </div>
    );
}
export default Home;
