import Carousel from '@/app/componants/Carousel/CarouselComponat';
import { CustomText } from '@/utils/ColorEffect';
import React from 'react';

interface ProjectSectionProps {
  data: IOneProject;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ data }) => {
  return (
    <div className='shadow-[10px_10px_50px_1px_rgba(0,0,0,0.2)] rounded-[50px] p-4 m-4'>
      <CustomText className='text-[20px] font-semibold px-4'>{`< ${data.name} >`}</CustomText>
      <Carousel images={Object.values(data.images)} />
      <div className="flex mt-8 justify-center items-center">
        {data.tools.map((tool, index) => (
          <div key={index} className="rounded-3xl p-2 mx-2 shadow-[5px_5px_20px_0px_rgba(0,0,0,0.05)] bg-[#ffffff18]">
                <CustomText className="text-sm font-light text-center ">{tool}</CustomText>
            </div>
        ))}
      </div>
        <CustomText className="text-sm font-light my-10 px-8 py-4 rounded-3xl">&emsp;&emsp;{data.description}</CustomText>
    </div>
  );
};

export default ProjectSection;