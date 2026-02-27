import React, { useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const rotateY = px * 30;
    const rotateX = -py * 30;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    /* 바깥 wrapper */
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "800px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* 카드 */}
      <div
        className="relative z-10 bg-transparent"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className={`p-8 bg-linear-to-br rounded-3xl shadow-xl border-4 border-white relative ${
            exp.type === "project"
              ? "from-[#DBEAFE] to-[#EFF6FF]"
              : "from-[#F3E8FF] to-[#FAF5FF]"
          }`}
        >
          <div className="relative z-10 min-w-full">
            {/* 기간 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-4">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span className="text-xs text-gray-700">{exp.period}</span>
            </div>

            {/* 직무 or 프로젝트명 */}
            <h3 className="text-2xl mb-2 text-gray-800">{exp.title}</h3>

            {/* 회사명 or 부가 설명 */}
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              <span className="text-[#4B66BE]">{exp.position}</span>
            </div>

            {/* 회사 설명 or 프로젝트 요약 */}
            <p className="text-gray-700 mb-5">{exp.summary}</p>

            {/* 상세 업무 or 상세 역할 */}
            <ul className="space-y-3 mb-6 bg-white/70 py-4 px-6 rounded-lg">
              {exp.tasks.map((task, i) => (
                <li key={i} className="text-sm text-gray-700">
                  <strong className="text-lg leading-0">· </strong>
                  {task}
                </li>
              ))}
            </ul>

            {/* 기술 태그 */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white text-sm text-gray-700 border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
