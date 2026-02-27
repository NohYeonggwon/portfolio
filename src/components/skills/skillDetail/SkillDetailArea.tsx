"use client";

import { useState } from "react";
import MenuBar from "./MenuBar";
import SkillDetailSection from "./SkillDetailSection";

export default function SkillDetailArea() {
  const [activeMenu, setActiveMenu] = useState<SkillCategory>("Language");

  return (
    <div className="px-20 flex gap-20">
      <div>
        <MenuBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <SkillDetailSection activeMenu={activeMenu} />
    </div>
  );
}
