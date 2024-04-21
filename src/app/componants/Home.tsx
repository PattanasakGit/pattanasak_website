import { CustomText, TopicEffect } from "@/utils/ColorEffect";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="bg-gray-500 w-full h-[87vh] pt-10 grid grid-cols-1 place-items-center place-content-start">
            <img src="profile.jpg" alt="profile image" className="object-cover rounded-[40%] h-[250px] w-[300px] md:w-[350px] lg:w-[360px] xl:w-[400px] mb-2" />
            <TopicEffect text="ThePat Test" className="my-8" />
            <CustomText className="text-[40px]">Pattanasak Test</CustomText>
        </div>
    );
}
export default Home;
