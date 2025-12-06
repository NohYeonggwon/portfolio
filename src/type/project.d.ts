type ActiveTabType = "Web" | "Design";

interface Project {
  id: string; // 고유 ID
  logo: string; // 로고 이미지 경로 또는 import
  title: string; // 프로젝트 이름
  period: string; // 프로젝트 기간
  mainTech: JSX.Element; // 메인 프레임워크
  shortDescription: string; // 간단 설명
  definition: string; // 프로젝트 정의(프로젝트 설명)
  techStack: JSX.Element[]; // 기술 스택 리스트
}
