import { Layers } from "lucide-react";
import SectionLayout from "../common/SectionLayout";
import SkillsArea from "../skills/skillTable/SkillsArea";
import SkillDetailArea from "../skills/skillDetail/SkillDetailArea";

export default function Skills() {
  return (
    <>
      <SectionLayout
        icon={<Layers />}
        title="Skills"
        subTitle="아래의 기술 스택과 도구를 사용할 수 있습니다."
        bg="#EEF2F7"
      >
        <SkillsArea />
        <SkillDetailArea />
      </SectionLayout>
    </>
  );
}
