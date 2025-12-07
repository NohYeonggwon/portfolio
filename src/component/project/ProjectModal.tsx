import { X } from "lucide-react";
import ProjectDetailItem from "./ProjectDetailItem";

type ProjectModalProps = {
  activeTab: ActiveTabType;
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({
  activeTab,
  project,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <>
      <div
        className="fixed z-50 inset-0 w-full h-screen bg-black/40 py-12"
        onClick={onClose}
      >
        {/* 컨텐츠 영역 */}
        <div
          className="max-w-[750px] h-full mx-auto bg-black/90"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 컨텐츠 내부 영역 */}
          <div className="w-full h-full p-8 space-y-12 text-white overflow-y-auto">
            {activeTab === "Design" ? (
              <>
                {project.designImg ? (
                  <div>
                    {project.designImg.map((img) => (
                      <img className="w-full" src={img} alt={project.title} />
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <p className="text-2xl">이미지가 없습니다.</p>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* 상단 */}
                <div className="space-y-8">
                  {/* 메인 기술 + 닫기 창 버튼 */}
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 p-1 bg-white rounded-lg">
                      {project.mainTech}
                    </div>
                    <button className="cursor-pointer">
                      <X size={40} onClick={onClose} />
                    </button>
                  </div>

                  {/* 프로젝트 이름 */}
                  <h4 className="text-2xl font-semibold">{project.title}</h4>

                  <div className="space-y-6">
                    {/* 프로젝트 설명 */}
                    <div className="space-y-1">
                      <p className="text-white/50">프로젝트 설명</p>
                      <p className="text-white/80">{project.definition}</p>
                    </div>

                    {/* 기술 스택 */}
                    <div className="space-y-1">
                      <p className="text-white/50">기술 스택</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <div className="w-8 h-8 p-1 bg-white rounded-md">
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 참여인원, 기간, 관련 링크 */}
                    <div className="flex flex-row gap-6">
                      <div className="space-y-1">
                        <p className="text-white/50">참여인원</p>
                        <p className="text-white/80">
                          {project.detail?.members}명
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-white/50">기간</p>
                        <p className="text-white/80">{project.period}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-white/50">관련 링크</p>
                        <div className="space-x-2 text-white/80">
                          {project.detail?.site.demo && (
                            <a
                              className="underline"
                              target="_blank"
                              href={project.detail?.site.demo}
                            >
                              사이트
                            </a>
                          )}
                          {project.detail?.site.git && (
                            <a
                              className="underline"
                              target="_blank"
                              href={project.detail?.site.git}
                            >
                              깃허브
                            </a>
                          )}

                          {project.detail?.site.figma && (
                            <a
                              className="underline"
                              target="_blank"
                              href={project.detail?.site.figma}
                            >
                              피그마
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 중간 바 */}
                <div className="w-full h-px bg-white/20"></div>

                {/* 상세 내용 */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">상세 내용</h4>
                  {project.detail?.siteMainImg && (
                    <div className="w-full">
                      <img
                        src={project.detail?.siteMainImg}
                        alt={project.title}
                      />
                    </div>
                  )}

                  {/* 상세 내용 리스트 영역 */}
                  <div className="ml-2 space-y-8">
                    {/* 상세 내용 리스트 1개 */}
                    <div className="space-y-1">
                      <h5>1. 프로젝트 개요</h5>
                      <ul className="text-white/80 ml-6 space-y-1">
                        {project.detail?.contents.first.map((content) => (
                          <ProjectDetailItem content={content} />
                        ))}
                      </ul>
                    </div>

                    {/* 상세 내용 리스트 1개 */}
                    <div className="space-y-1">
                      <h5>2. 내가 담당한 역할</h5>
                      <ul className="text-white/80 ml-6 space-y-1">
                        {project.detail?.contents.second.map((content) => (
                          <ProjectDetailItem content={content} />
                        ))}
                      </ul>
                    </div>

                    {/* 상세 내용 리스트 1개 */}
                    <div className="space-y-1">
                      <h5>3. 기술적 구현 포인트</h5>
                      <ul className="text-white/80 ml-6 space-y-1">
                        {project.detail?.contents.third.map((content) => (
                          <ProjectDetailItem content={content} />
                        ))}
                      </ul>
                    </div>

                    {/* 상세 내용 리스트 1개 */}
                    <div className="space-y-1">
                      <h5>4. 문제 해결 경험</h5>
                      <ul className="text-white/80 ml-6 space-y-1">
                        <li className="space-y-1">
                          <span>문제</span>
                          <div className="ml-3">
                            {project.detail?.contents.fourth[0].map(
                              (content) => (
                                <ProjectDetailItem content={content} />
                              )
                            )}
                          </div>
                        </li>
                        <li className="space-y-1">
                          <span>원인 분석</span>
                          <div className="ml-3">
                            {project.detail?.contents.fourth[1].map(
                              (content) => (
                                <ProjectDetailItem content={content} />
                              )
                            )}
                          </div>
                        </li>
                        <li className="space-y-1">
                          <span>해결 방법</span>
                          <div className="ml-3">
                            {project.detail?.contents.fourth[2].map(
                              (content) => (
                                <ProjectDetailItem content={content} />
                              )
                            )}
                          </div>
                        </li>
                        <li className="space-y-1">
                          <span>결과</span>
                          <div className="ml-3">
                            {project.detail?.contents.fourth[3].map(
                              (content) => (
                                <ProjectDetailItem content={content} />
                              )
                            )}
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* 상세 내용 리스트 1개 */}
                    <div className="space-y-1">
                      <h5>5. 배운 점 & 개선 방향</h5>
                      <ul className="text-white/80 ml-6 space-y-1">
                        {project.detail?.contents.fifth.map((content) => (
                          <ProjectDetailItem content={content} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
