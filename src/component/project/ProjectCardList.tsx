import { ProjectData } from "../../data/project";
import ProjectCard from "./ProjectCard";

export default function ProjectCardList({
  activeTab,
  onCardClick,
}: {
  activeTab: ActiveTabType;
  onCardClick: (project: Project) => void;
}) {
  const isDesign = activeTab === "Design";
  const Datas = ProjectData[activeTab] ?? [];

  return (
    <>
      <div className={`grid gap-8 ${isDesign ? "grid-cols-4" : "grid-cols-3"}`}>
        {Datas.map((item) => (
          <div key={item.id}>
            <ProjectCard
              isDesign={isDesign}
              data={item}
              onClick={() => onCardClick(item)} // 여기서 프로젝트 데이터 넘김
            />
          </div>
        ))}
      </div>
    </>
  );
}
