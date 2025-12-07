export default function DesignHoverCard({ data }: { data: Project }) {
  return (
    <div className="flex flex-col justify-between h-full gap-6">
      <div className="space-y-4">
        <div>
          <p className="text-lg md:text-xl font-semibold leading-snug">
            {data.shortDescription}{" "}
            <span className="text-xs md:text-sm ml-1 text-gray-500">
              개인 100%
            </span>
          </p>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">짧은 설명 2줄 정도</p>

        <div className="space-y-2">
          <p className="text-sm md:text-base font-semibold">RGB 컬러</p>
          <div className="flex flex-wrap gap-2">
            {data.colors?.map((color) => (
              <div
                key={color}
                className="w-6 h-6 rounded-sm border border-gray-200"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.techStack.map((tech) => (
          <div key={tech} className="w-6 h-6 rounded-full">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
