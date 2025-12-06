export default function ProjectItem({ data }: { data: Project }) {
  return (
    <div className="relative group rounded-lg overflow-hidden">
      {/* 메인 이미지 카드 */}
      <div
        className="h-65 bg-center bg-size-[200px] bg-no-repeat"
        style={{ backgroundImage: `url(${data.logo ? data.logo : ""})` }}
      >
        <div className="w-full h-full bg-black/60 flex flex-col items-center justify-center gap-5 rounded-lg text-white transition duration-300 group-hover:opacity-0">
          <span className="text-4xl">{data.id}</span>
          <div className="w-20 h-0.5 bg-white"></div>
          <span className="text-xl font-light">{data.period}</span>
        </div>
      </div>

      {/* Hover 시 나타나는 상세 카드 */}
      <div className="cursor-pointer absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="min-h-65 w-full h-full flex flex-col gap-6 rounded-lg bg-white p-6 border">
          <div className="space-y-4">
            <div className="w-10 h-10">{data.mainTech}</div>
            <p className="text-xl font-semibold">{data.shortDescription}</p>
            <p className="text-sm line-clamp-3">{data.definition}</p>
          </div>

          <div className="flex gap-2">
            {data.techStack.map((tech) => (
              <div className="w-6 h-6">{tech}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
