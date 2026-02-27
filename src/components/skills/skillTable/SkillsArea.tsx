import { Code2, Monitor, Palette, Wrench } from "lucide-react";
import SkillSection from "./SkillSection";

export default function SkillsArea() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <SkillSection icon={<Code2 />} title="Language" category="Language" />
        <SkillSection icon={<Monitor />} title="FrontEnd" category="FrontEnd" />
        <SkillSection icon={<Palette />} title="Design" category="Design" />
        <SkillSection
          icon={<Wrench />}
          title="Tools & Others"
          category="ToolsAndOthers"
        />
      </div>
    </>
  );
}
