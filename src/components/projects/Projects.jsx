import { projects } from "./projects";
import Project from "./Project";

function Projects() {
  return (
    <div>
      {projects.map((el, index) => (
        <Project
          key={index}
          index={index}
          title={el.title}
          images={el.images}
          description={el.description}
          urlGit={el.urlGit}
          urlPage={el.urlPage}
        />
      ))}
    </div>
  );
}

export default Projects;
