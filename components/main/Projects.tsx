import React from "react";
import ProjectCard from "../sub/ProjectCard";


function Projects() {
  

  return (
    <div className="flex flex-col items-center justify-center py-0" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        
      <ProjectCard
  src="/project_card_design (1).png"
  title="Automated Database Backup & Software Update"
  description="This project automates database backups and schedules software installations and updates using Ansible. By leveraging Ansible’s automation capabilities, it ensures reliable backups and keeps the company’s infrastructure up-to-date and secure, minimizing downtime and manual intervention."
/>

<ProjectCard
  src="/CardImage.png"
  title="Modern React Native Django App"
  description="This is a modern Web mobile Tourism sites & Restaurant application, offering users a wide range of locations to visit in a particular city. Built with React Native, Django, and Redux, it provides a seamless experience for users looking to explore new destinations."
/>


 

      </div>
    </div>
  );
}

export default Projects;
