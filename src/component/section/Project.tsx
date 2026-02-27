import { Folder } from "lucide-react";
import SectionLayout from "../common/SectionLayout";
import MenuTab from "../project/MenuTab";
import { useState } from "react";
import ProjectCardList from "../project/ProjectCardList";
import ProjectModal from "../project/ProjectModal";

export default function Project() {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("Web");

  // 클릭된 카드 데이터 저장할 상태
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 카드 클릭 시 실행될 함수
  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <SectionLayout
        icon={<Folder />}
        title="Project"
        subTitle="주요 프로젝트의 세부 사항을 확인해보세요"
        bg="#EEF2F7"
      >
        <div className="space-y-25">
          <MenuTab activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* 카드 클릭 핸들러 내려주기 */}
          <ProjectCardList
            activeTab={activeTab}
            onCardClick={handleCardClick}
          />
        </div>
      </SectionLayout>
      {/* 선택된 프로젝트가 있을 때만 모달 렌더링 */}
      {selectedProject && (
        <ProjectModal
          activeTab={activeTab}
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
