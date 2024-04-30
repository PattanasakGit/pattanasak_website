import { CustomText, TopicEffect } from "@/utils/ColorEffect";
import React from "react";
import Image from 'next/image'
import { IconBrandGithub } from '@tabler/icons-react';
import Typewriter from 'react-ts-typewriter';

const Home: React.FC = () => {
    const CustomBTN = 'w-[100px] h-[25px] px-8 py-7 bg-[#ffffff05] rounded-[50px]  border-[#c6af71] flex justify-center items-center  hover:scale-[1.2] shadow-[5px_5px_20px_0px_rgba(0,0,0,0.1)]';
    const hendleClickGithub = () => {
        window.open("https://github.com/PattanasakGit", "_blank");
    }
    return (
      <div className=" w-full py-10 grid grid-cols-1 place-items-center place-content-start">
        <Image
          src="/profile.webp"
          alt="profile image"
          width={350}
          height={200}
          className="rounded-[150px]"
        />
        <TopicEffect className="my-10 text-[60px]"> I’m Pattanasak </TopicEffect>
        <CustomText className="text-[30px] font-bold mb-4">
          <Typewriter
            text={['< Software developer >', '< Frontend developer >','< Fullstack developer >']}
            speed={150}
            cursor={true}
            loop={true}
          />
       </CustomText>
        <div className=" my-12"> 
          <button className={CustomBTN} onClick={hendleClickGithub}>
            <CustomText>
                <IconBrandGithub stroke={2} size={45}/>  
            </CustomText>
          </button>
        </div>
      </div>
    );
}
export default Home;
