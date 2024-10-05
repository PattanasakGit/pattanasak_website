import React, { useMemo } from 'react';
import { TopicEffect } from '@/utils/ColorEffect';
import ProjectSection from './ProjectSection';
import { YakkaiData, CatchatData, HelpdeskData, AINBOX, PokeDex, JUSTBOOKMARKS, AiGenImages } from '@/store/ProjectData';

const Project: React.FC = () => {
  const projects = useMemo(() => [YakkaiData, AINBOX, AiGenImages, JUSTBOOKMARKS, CatchatData, PokeDex, HelpdeskData], []);

  return (
    <section className="pt-3 rounded-[50px] w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] my-4 overflow-x-hidden">
      <TopicEffect className="text-center md:text-left text-[35px] px-8">PROJECTS</TopicEffect>
      <div className="mt-[50px]">
        {projects.map((projectData, index) => (
          <ProjectSection key={index} data={projectData} index={index} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(Project);
