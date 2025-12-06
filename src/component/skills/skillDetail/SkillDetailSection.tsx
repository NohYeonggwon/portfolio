import { skillsDetailData } from "../../../data/skills";
import SkillStack from "./SkillStack";

export default function SkillDetailSection({
  activeMenu,
}: {
  activeMenu: SkillCategory;
}) {
  const Datas = skillsDetailData[activeMenu] ?? [];
  return (
    <div className="flex-1">
      <h4 className="text-xl font-medium mb-7">
        Skill Stack <span className="text-[#4B66BE]">@{activeMenu}</span>
      </h4>

      <SkillStack data={Datas} />
    </div>
  );
}
