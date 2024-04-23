import { CustomText, TopicEffect } from "@/utils/ColorEffect";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="w-full pt-10 grid grid-cols-1 place-items-center place-content-start">
            <img src="profile.jpg" alt="profile image" className="object-cover rounded-[150px] h-[250px] w-[400px] mb-2" />
            <TopicEffect className="my-8 text-[60px]"> I’m  Pattanasak </TopicEffect>
            <CustomText className="text-[30px] font-bold mb-4">  {'< Software developer >'} </CustomText>
            <CustomText className="text-[17px] w-[80%] sm:w-[70%] md:w-[65%] lg:w-[50%] xl:w-[45%]"> 
                &emsp;&emsp;"My main job is to translate ideas into vibrant code, in order to deliver the bestpossible experience to every user. Creating programs and websites that meet users' needs is what brings me immense happiness and pride. "
            </CustomText>
        </div>
    );
}
export default Home;
