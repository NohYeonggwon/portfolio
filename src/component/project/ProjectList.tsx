import { ProjectData } from "../../data/project";
import ProjectItem from "./ProjectItem";

export default function ProjectList({
  activeTab,
}: {
  activeTab: ActiveTabType;
}) {
  const isDesign = activeTab === "Design";
  const Datas = ProjectData[activeTab] ?? [];

  return (
    <div className={`grid gap-8 ${isDesign ? "grid-cols-4" : "grid-cols-3"}`}>
      {Datas.map((item) => (
        <div key={item.id}>
          <ProjectItem data={item} />
        </div>
      ))}
    </div>
  );
}
