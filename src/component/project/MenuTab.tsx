type MenuTabType = {
  activeTab: ActiveTabType;
  setActiveTab: (tab: ActiveTabType) => void;
};

export default function MenuTab({ activeTab, setActiveTab }: MenuTabType) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-1.5 text-sm font-medium p-1.5 rounded-full bg-black/20">
        {/* Web 버튼 */}
        <button
          onClick={() => setActiveTab("Web")}
          className={`cursor-pointer px-3 py-2 rounded-full ${
            activeTab === "Web" ? "bg-black/50 text-white" : "hover:bg-black/20"
          }`}
        >
          Web
        </button>

        {/* Design 버튼 */}
        <button
          onClick={() => setActiveTab("Design")}
          className={`cursor-pointer px-3 py-2 rounded-full ${
            activeTab === "Design"
              ? "bg-black/50 text-white"
              : "hover:bg-black/20"
          }`}
        >
          Design
        </button>
      </div>
    </div>
  );
}
