import React from 'react';
import { TopicEffect } from '@/utils/ColorEffect';
import ProjectSection from './ProjectSection';
import { YakkaiData, CatchatData, HelpdeskData } from '@/store/ProjectData';

const Project: React.FC = () => {
  return (
    <div className="pt-3 p-8 rounded-[50px] w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] my-4">
      <TopicEffect className="text-[35px]">PROJECTS</TopicEffect>
      <div className="mt-[50px]">
        <ProjectSection data={YakkaiData} />
        <ProjectSection data={CatchatData} />
        <ProjectSection data={HelpdeskData} />
      </div>
    </div>
  );
};

export default Project;