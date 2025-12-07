export default function DesignHoverCard({ data }: { data: Project }) {
  return (
    <div className="w-full h-full gap-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-lg md:text-xl font-semibold">{data.definition}</p>
          <p>개인 100%</p>
        </div>

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

        <div className="flex flex-wrap gap-2">
          {data.techStack.map((tech) => (
            <div key={tech} className="w-6 h-6 rounded-full">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
