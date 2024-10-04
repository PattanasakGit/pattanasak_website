import React from 'react';
import { TopicEffect } from '@/utils/ColorEffect';
import ProjectSection from './ProjectSection';
import { YakkaiData, CatchatData, HelpdeskData, AINBOX, PokeDex, JUSTBOOKMARKS } from '@/store/ProjectData';

const Project: React.FC = () => {
  return (
    <section className="pt-3 rounded-[50px] w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] my-4">
      <TopicEffect className="text-center md:text-left text-[35px] px-8">PROJECTS</TopicEffect>
      <div className="mt-[50px]">
        <ProjectSection data={YakkaiData} />
        <ProjectSection data={AINBOX} />
        <ProjectSection data={JUSTBOOKMARKS} />
        <ProjectSection data={CatchatData} />
        <ProjectSection data={PokeDex} />
        <ProjectSection data={HelpdeskData} />
      </div>
    </section>
  );
};

export default Project;
