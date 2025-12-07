export default function WebHoverCard({ data }: { data: Project }) {
  return (
    <div className="flex flex-col justify-between h-full gap-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs">
            {data.mainTech}
          </span>
          <span className="text-sm text-white px-3 py-1 rounded-full bg-[#4B66BE] shadow-lg">
            {data.role}
          </span>
        </div>

        <p className="text-lg md:text-xl font-semibold">
          {data.shortDescription}
        </p>

        <p className="text-sm text-gray-600 line-clamp-3">{data.definition}</p>
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
