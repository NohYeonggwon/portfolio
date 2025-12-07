import DesignHoverCard from "./DesignHoverCard";
import WebHoverCard from "./WebHoverCard";

export default function ProjectCard({
  isDesign,
  data,
  onClick,
}: {
  isDesign: boolean;
  data: Project;
  onClick: () => void;
}) {
  return (
    <>
      <div
        className="group relative w-full h-65 perspective-[1000px] cursor-pointer"
        onClick={onClick}
      >
        {/* 3D 컨테이너 */}
        <div className="relative w-full h-full transform-3d group-hover:transform-[rotateY(180deg)]">
          {/* 앞면 (이미지 + 타이틀) */}
          <div className="absolute inset-0 rounded-lg overflow-hidden shadow-md  backface-hidden transform-[rotateY(0deg)]">
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={data.logo ?? ""}
                  alt={data.title}
                  className={`${
                    isDesign
                      ? "w-full h-full object-fill"
                      : "w-40 h-40 object-contain"
                  }`}
                />
                {/* 어두운 오버레이 */}
                <div className="absolute inset-0 bg-black/60" />
              </div>

              {/* 안쪽 컨텐츠 (parallax 느낌) */}
              <div
                className="relative z-10 flex flex-col items-center justify-center gap-4 text-white text-center px-6"
                style={{
                  transform: "translateZ(60px) scale(0.94)",
                }}
              >
                <span className="text-2xl md:text-3xl font-semibold">
                  {data.title}
                </span>
                <div className="w-16 h-0.5 bg-white/80" />
                <span className="text-lg md:text-base">{data.period}</span>
              </div>
            </div>
          </div>

          {/* 뒷면 (상세 카드: Design / Web) */}
          <div className=" absolute inset-0 rounded-lg overflow-hidden bg-white border shadow-md p-6 flex flex-col justify-between backface-hidden transform-[rotateY(180deg)]">
            <div
              className="h-full"
              style={{
                transform: "translateZ(60px) scale(0.94)",
              }}
            >
              {isDesign ? (
                <DesignHoverCard data={data} />
              ) : (
                <WebHoverCard data={data} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
