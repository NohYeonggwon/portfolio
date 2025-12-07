const MENUS: SkillCategory[] = [
  "Language",
  "FrontEnd",
  "Design",
  "ToolsAndOthers",
];

export default function MenuBar({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: SkillCategory;
  setActiveMenu: (menu: SkillCategory) => void;
}) {
  const activeIndex = Math.max(MENUS.indexOf(activeMenu), 0);
  const ITEM_HEIGHT = 48;

  return (
    <div className="flex-none relative">
      {/* 전체 세로 막대 (비활성 배경) */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gray-300 rounded-full" />

      {/* 활성 선택 막대 */}
      <div
        className="absolute left-0 w-1 bg-[#4B66BE] rounded-full transition-transform duration-300"
        style={{
          height: ITEM_HEIGHT,
          transform: `translateY(${activeIndex * ITEM_HEIGHT}px)`,
        }}
      />

      <ul className="pl-4">
        {MENUS.map((menu, index) => {
          const isActive = index === activeIndex;
          return (
            <li
              key={menu}
              onClick={() => setActiveMenu(menu)}
              className={`
                cursor-pointer px-5 py-3 font-semibold 
                transition-colors duration-300
                ${
                  isActive
                    ? "text-[#4B66BE]"
                    : "text-gray-600 hover:text-[#4B66BE]"
                }
              `}
            >
              {menu === "ToolsAndOthers" ? "Tools & Others" : menu}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
