export default function SkillItem({ data }: { data: SkillData }) {
  return (
    <>
      <div className="space-y-4">
        {/* Top */}
        <div className="flex justify-between items-center gap-2">
          <div className="flex gap-2 items-center">
            <div className="w-6 h-6">{data.icon}</div>
            <span>{data.name}</span>
          </div>
          <span className="text-sm bg-white py-1.5 px-2.5 rounded-full shadow-[0_2px_6px_0_rgb(0,0,0,0.25)]">
            {data.level}
          </span>
        </div>
        {/* Bottom */}
        <div className="relative w-full h-4 rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,0.25)]">
          <div
            className="z-10 absolute top-0 left-0  h-4 rounded-full bg-linear-to-r from-[#4B66BE] to-[#C8D5FF]"
            style={{ width: data.level }}
          ></div>
        </div>
      </div>
    </>
  );
}
