import { useNav } from "@/lib/navigation";
import { projects } from "@/data/projects";
import ProjectPanel from "@/components/panels/ProjectPanel";
import AboutPanel from "@/components/panels/AboutPanel";
import PhotosPanel from "@/components/panels/PhotosPanel";
import MusicPanel from "@/components/panels/MusicPanel";

export default function ProjectScreen() {
  const { view } = useNav();
  const open = view !== "home";
  return (
    <section
      id="project-screen"
      className={"project-screen" + (open ? " is-open" : "")}
      aria-label="Projects"
      aria-hidden={!open}
    >
      <div className="project-screen__inner">
        {projects.map((p) => (
          <ProjectPanel key={p.key} project={p} active={view === p.key} />
        ))}
        <AboutPanel active={view === "about"} />
        <PhotosPanel active={view === "photos"} />
        <MusicPanel active={view === "music"} />
      </div>
    </section>
  );
}
