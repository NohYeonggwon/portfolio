import { Briefcase } from "lucide-react";
import SectionLayout from "../component/common/SectionLayout";
import { experiences } from "../data/experience";
import ExperienceCard from "../component/experience/ExperienceCard";

export default function Experience() {
  return (
    <>
      <SectionLayout
        icon={<Briefcase />}
        title="Experience"
        subTitle="다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다."
        bg="#F5F5F0"
      >
        <div className="relative">
          {/* Timeline*/}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            <div className="absolute inset-0 bg-linear-to-b from-[#d4b5fd] via-[#b8e6d5] to-[#ffd4d4] rounded-full"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div className="relative">
                  {/* Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-6 -translate-x-1/2 z-10">
                    <div
                      className={`w-14 h-14 rounded-full shadow-md bg-linear-to-r ${exp.color} p-1`}
                    >
                      <div className="w-full h-full rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* CONTENT GRID */}
                  <div className="grid lg:grid-cols-2 gap-8 ">
                    {/* LEFT */}
                    {isLeft && <ExperienceCard exp={exp} />}

                    {/* EMPTY */}
                    <div className="hidden lg:block"></div>

                    {/* RIGHT */}
                    {!isLeft && <ExperienceCard exp={exp} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
