import React from "react";
import { BGEffect, CustomText, TopicEffect } from "@/utils/ColorEffect";
import Carousel from "./Carousel/CarouselComponat";

const Project: React.FC = () => {
    const images = [
        'https://plus.unsplash.com/premium_photo-1710514754126-606ceb7291d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1698084068220-856ded06c1a4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1688678097473-2ce11d23e30c?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1711973787718-c5d1b6ae489b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1643228995868-bf698f67d053?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1672135483622-c5e769736c8b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'profile.jpg', 'avatar.gif'
    ];

    return(
        <div className="pt-3 p-8 rounded-[50px]  w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] my-4">
            <TopicEffect className="text-[35px]" > PROJECTS </TopicEffect>
            <div>
                <Carousel images={images} />
            </div>
        </div>
    );
};

export default Project;