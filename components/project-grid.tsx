import Image from "next/image";

import type { Project } from "@/lib/site-data";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article
          key={project.slug}
          className={`project-card project-card-${project.size}`}
        >
          <div className={`project-media project-media-${project.size}`}>
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            {project.badge ? (
              <span className="project-badge">{project.badge}</span>
            ) : null}
          </div>

          <div className="project-body">
            <p className="meta">
              {project.category} . {project.year}
            </p>
            <h3>{project.title}</h3>
            <p>{project.blurb}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
