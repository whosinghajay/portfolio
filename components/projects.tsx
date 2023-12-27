import { projectsData } from "@/lib/data";
import React from "react";
import SectionHeading from "./section-heading";
import  Project  from "./project";

export default function projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
