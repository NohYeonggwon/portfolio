import { StaticImageData } from "next/image";

export type ActiveTabType = "Web" | "Design";

export interface ProjectType {
  id: string; // 고유 ID
  logo: StaticImageData; // 로고 이미지 경로 또는 import
  title: string; // 이름
  period: string; // 기간
  mainTech?: JSX.Element; // Web: 메인 프레임워크 / Design: x
  role?: string; // Web: 역할 / Design: x
  shortDescription?: string; // Web: 간단 설명 / Design: x
  definition: string; // Web: 프로젝트 정의(프로젝트 설명) / Design: 제품 이름
  colors?: string[]; // Web: x / Design: 디자인일 경우 컬러
  techStack: JSX.Element[]; // 기술 스택 리스트
  detail?: {
    // Web: 세부 내용
    members: string;
    site: {
      demo: string;
      git: string;
      figma: string;
    };
    siteMainImg: StaticImageData;
    contents: {
      first: string[];
      second: string[];
      third: string[];
      fourth: string[][];
      fifth: string[];
    };
  };
  designImg?: StaticImageData[]; // Design: 이미지
}
