export default function SkillStack({ data }: { data: SkillDetailData[] }) {
  return (
    <>
      <div className="space-y-8">
        {data.map((item, index) => (
          <div key={index} className="flex items-start gap-5">
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-[#4B66BE]">
              <div className="w-15 h-15">{item.icon}</div>
            </div>
            <div className="space-y-2 mt-1">
              <p className="text-xl font-medium">{item.name}</p>
              <ul className="space-y-1">
                {item.contents.map((content, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-lg font-medium">{index + 1}</span>.{" "}
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
