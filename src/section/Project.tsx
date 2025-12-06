import { Folder } from "lucide-react";
import SectionLayout from "../component/common/SectionLayout";
import MenuTab from "../component/project/MenuTab";
import { useState } from "react";
import ProjectList from "../component/project/ProjectList";

export default function Project() {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("Web");

  return (
    <SectionLayout
      icon={<Folder />}
      title="Project"
      subTitle="주요 프로젝트의 세부 사항을 확인해보세요"
      bg="#FBFBF4"
    >
      <div className="space-y-25">
        <MenuTab activeTab={activeTab} setActiveTab={setActiveTab} />

        <ProjectList activeTab={activeTab} />
      </div>
    </SectionLayout>
  );
}
