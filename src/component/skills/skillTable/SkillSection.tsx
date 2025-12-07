import type { JSX } from "react";
import SkillList from "./SkillList";
import { skillsData } from "../../../data/skills";

export default function SkillSection({
  icon,
  title,
  category,
}: {
  icon: JSX.Element;
  title: string;
  category: SkillCategory;
}) {
  const Datas = skillsData[category] ?? [];

  return (
    <>
      <div className="bg-white rounded-2xl p-8 space-y-6">
        <div className="flex items-center gap-4">
          {icon}
          <span className="font-medium text-2xl">{title}</span>
        </div>

        <SkillList data={Datas} />
      </div>
    </>
  );
}
