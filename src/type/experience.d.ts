interface Experience {
  type: string;
  period: string; // 공통
  title: string; // 직무 or 프로젝트명 (공통화)
  position?: string; // 회사명 or 포지션
  summary?: string; // 회사 설명 or 프로젝트 요약
  tasks: string[]; // 상세 업무 / 상세 역할
  tags: string[]; // 기술 태그
  color: string;
}
