type SkillCategory = "Language" | "FrontEnd" | "Design" | "ToolsAndOthers";

interface SkillData {
  name: string;
  icon: JSX.Element;
  level: string;
}

interface SkillDetailData {
  name: string;
  icon: JSX.Element;
  contents: string[];
}
