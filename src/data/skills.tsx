import AdobeXDIcon from "../components/icons/AdobeXDIcon";
import AxiosIcon from "../components/icons/AxiosIcon";
import CssIcon from "../components/icons/CssIcon";
import ESLintIcon from "../components/icons/ESLintIcon";
import FigmaIcon from "../components/icons/FigmaIcon";
import GithubIcon from "../components/icons/GithubIcon";
import HtmlIcon from "../components/icons/HtmlIcon";
import IllustIcon from "../components/icons/IllustIcon";
import JsIcon from "../components/icons/JsIcon";
import NextIcon from "../components/icons/NextIcon";
import NotionIcon from "../components/icons/NotionIcon";
import PsIcon from "../components/icons/PsIcon";
import ReactIcon from "../components/icons/ReactIcon";
import SassIcon from "../components/icons/SassIcon";
import SlackIcon from "../components/icons/SlackIcon";
import SupabaseIcon from "../components/icons/SupabaseIcon";
import TailwindIcon from "../components/icons/TailwindIcon";
import TanstackIcon from "../components/icons/TanstackIcon";
import TsIcon from "../components/icons/TsIcon";
import VercelIcon from "../components/icons/VercelIcon";
import ZustandIcon from "../components/icons/ZustandIcon";

export const skillsData: Record<SkillCategory, SkillData[]> = {
  Language: [
    {
      name: "HTML5",
      icon: <HtmlIcon />,
      level: "85%",
    },
    {
      name: "CSS3",
      icon: <CssIcon />,
      level: "90%",
    },
    {
      name: "JavaScript",
      icon: <JsIcon />,
      level: "75%",
    },
    {
      name: "TypeScript",
      icon: <TsIcon />,
      level: "70%",
    },
  ],
  FrontEnd: [
    {
      name: "React",
      icon: <ReactIcon />,
      level: "70%",
    },
    {
      name: "NextJS",
      icon: <NextIcon />,
      level: "65%",
    },
    {
      name: "TailwindCSS",
      icon: <TailwindIcon />,
      level: "80%",
    },
    {
      name: "Library - Zustand, Axios, TanstackQuery (...etc)",
      icon: <ZustandIcon />,
      level: "60%",
    },
  ],
  Design: [
    {
      name: "PhotoShop",
      icon: <PsIcon />,
      level: "70%",
    },
    {
      name: "Illustrator",
      icon: <IllustIcon />,
      level: "80%",
    },
    {
      name: "UI/UX design - Figma, Adobe XD",
      icon: <FigmaIcon />,
      level: "80%",
    },
  ],
  ToolsAndOthers: [
    {
      name: "Code Formatter - ESLint, Prettier",
      icon: <ESLintIcon />,
      level: "60%",
    },
    {
      name: "Github",
      icon: <GithubIcon />,
      level: "70%",
    },
    {
      name: "Workflow - Slack, Notion",
      icon: <SlackIcon />,
      level: "85%",
    },
  ],
};

export const skillsDetailData: Record<SkillCategory, SkillDetailData[]> = {
  Language: [
    {
      name: "HTML5",
      icon: <HtmlIcon />,
      contents: [
        "시맨틱 마크업을 활용하여 검색 엔진과 사용자 모두에게 의미 있는 구조를 설계할 수 있습니다.",
        "접근성을 고려한 HTML 구조로 누구나 이용할 수 있는 웹 페이지를 만들어낼 수 있습니다.",
      ],
    },
    {
      name: "CSS3",
      icon: <CssIcon />,
      contents: [
        "반응형 레이아웃과 디자인 시스템 기반 스타일링을 통해 일관된 UI를 구현할 수 있습니다.",
        "SCSS·Tailwind 등 다양한 스타일링 도구를 활용해 효율적이고 확장성 있는 스타일 구조를 만들 수 있습니다.",
        "디테일한 UI 조정과 애니메이션으로 사용성을 높이는 미세한 인터랙션을 구현합니다.",
      ],
    },
    {
      name: "JavaScript",
      icon: <JsIcon />,
      contents: [
        "이벤트 기반 UI와 동적 기능을 구현하여 사용자와 자연스럽게 상호작용하는 웹을 만들 수 있습니다.",
        "비동기 처리와 API 연동을 통해 실제 서비스가 동작하는 수준의 기능 개발이 가능합니다.",
      ],
    },
    {
      name: "TypeScript",
      icon: <TsIcon />,
      contents: [
        "타입 시스템을 활용해 런타임 에러를 최소화하고 안정적인 코드 품질을 보장합니다.",
        "타입 정의와 구조 설계를 통해 협업과 유지보수가 쉬운 코드 베이스를 구성합니다.",
        "React·Next.js와 결합해 일관성과 신뢰성이 높은 컴포넌트 개발을 할 수 있습니다.",
      ],
    },
  ],
  FrontEnd: [
    {
      name: "React",
      icon: <ReactIcon />,
      contents: [
        "컴포넌트 단위 설계를 통해 재사용성과 유지보수성을 고려한 UI를 구축할 수 있습니다.",
        "Props, 상태 관리, 이벤트 핸들링을 활용해 동적으로 반응하는 화면을 구현한 경험이 있습니다.",
        "React Hooks를 활용해 직관적이고 확장성 있는 로직 구성을 할 수 있습니다.",
      ],
    },
    {
      name: "Next.js",
      icon: <NextIcon />,
      contents: [
        "파일 기반 라우팅과 서버 컴포넌트를 활용해 사용자 경험을 고려한 페이지 구조를 설계할 수 있습니다.",
        "이미지 최적화, 메타 설정 등 Next.js 환경을 통해 SEO 성능을 강화한 웹 페이지를 제작했습니다.",
      ],
    },
    {
      name: "TailwindCSS",
      icon: <TailwindIcon />,
      contents: [
        "Utility-first 방식을 활용해 빠르고 일관된 스타일링을 구현할 수 있습니다.",
        "반응형 디자인을 기준으로 디테일한 레이아웃 구성을 할 수 있습니다.",
        "커스텀 테마 설정과 확장 기능을 적용하여 프로젝트 전반의 디자인 시스템을 구축한 경험이 있습니다.",
      ],
    },
    {
      name: "SCSS",
      icon: <SassIcon />,
      contents: [
        "변수, mixin, 중첩 규칙을 적용해 효율적인 스타일 구조와 유지보수성 높은 코드를 작성할 수 있습니다.",
      ],
    },
    {
      name: "Zustand",
      icon: <ZustandIcon />,
      contents: [
        "Zustand로 전역 상태를 관리하며 간단하고 직관적인 스토어 구조를 설계했습니다.",
        "비동기 데이터와 UI 상태를 분리하여 클린한 상태 로직을 만들었습니다.",
      ],
    },
    {
      name: "Axios",
      icon: <AxiosIcon />,
      contents: [
        "Axios를 활용해 REST API와 연동하며, 데이터 요청/응답 흐름을 처리한 경험이 있습니다.",
        "인터셉터 설정을 통해 공통 헤더, 에러 처리 로직을 분리해 코드 재사용성을 높였습니다.",
      ],
    },
    {
      name: "TanStack Query",
      icon: <TanstackIcon />,
      contents: [
        "TanStack Query로 서버 상태를 관리하며, 캐싱·리페치·에러 관리가 자동화된 데이터 흐름을 구성했습니다.",
      ],
    },
  ],
  Design: [
    {
      name: "Photoshop",
      icon: <PsIcon />,
      contents: [
        "간단한 이미지 편집, 보정, 그래픽 요소 제작이 가능하며 웹에 필요한 시각 자산을 직접 제작할 수 있습니다.",
        "배너, 썸네일, 아이콘 등 웹 UI에 필요한 디자인 요소를 커스터마이징한 경험이 있습니다.",
      ],
    },
    {
      name: "Illustrator",
      icon: <IllustIcon />,
      contents: [
        "벡터 기반 아이콘 및 로고 제작이 가능하여 웹 프로젝트에 필요한 그래픽 리소스를 직접 제작할 수 있습니다.",
        "패스·도형 조작을 활용해 깔끔하고 확장성 있는 디자인 요소를 제작할 수 있습니다.",
        "UI 구성 요소를 벡터로 정리해 디자인과 구현 단계 모두에서 활용 가능한 리소스를 제작합니다.",
      ],
    },
    {
      name: "Figma",
      icon: <FigmaIcon />,
      contents: [
        "컴포넌트 기반 UI 설계를 통해 일관된 디자인 시스템을 구축할 수 있습니다.",
        "프로토타입 기능을 활용해 사용자 흐름과 인터랙션을 시각적으로 표현할 수 있습니다.",
      ],
    },
    {
      name: "Adobe XD",
      icon: <AdobeXDIcon />,
      contents: [
        "와이어프레임과 화면 설계를 중심으로 초기 UI 구조를 빠르게 시각화할 수 있습니다.",
        "디자이너·개발자 간 협업을 위한 화면 흐름 정리와 공유 경험이 있습니다.",
      ],
    },
  ],
  ToolsAndOthers: [
    {
      name: "ESLint / Prettier",
      icon: <ESLintIcon />,
      contents: [
        "ESLint와 Prettier를 함께 구성해 일관된 코드 스타일과 품질을 유지하는 개발 환경을 구축할 수 있습니다.",
        "팀 규칙에 맞는 린트 설정을 적용해 협업 시 발생하는 코드 스타일 충돌을 예방한 경험이 있습니다.",
      ],
    },
    {
      name: "GitHub",
      icon: <GithubIcon />,
      contents: [
        "브랜치 전략(Git Flow / Feature Branch)을 적용해 체계적인 버전 관리와 협업 흐름을 경험했습니다.",
        "GitHub Issues와 Pull Request를 활용해 작업 기록과 코드 리뷰 과정을 정돈할 수 있습니다.",
      ],
    },
    {
      name: "Slack",
      icon: <SlackIcon />,
      contents: [
        "Slack 채널 기반 소통을 통해 프로젝트 진행 상황을 명확하게 공유하고 협업 효율을 높였습니다.",
        "파일 공유, 스레드 답변, 알림 자동화 등을 활용해 업무 흐름을 체계적으로 관리할 수 있습니다.",
      ],
    },
    {
      name: "Notion",
      icon: <NotionIcon />,
      contents: [
        "Notion으로 일정, 작업 로그, 요구사항 문서를 정리하여 협업에 필요한 정보 구조를 명확하게 구성했습니다.",
        "템플릿과 데이터베이스 기능을 활용해 반복되는 작업을 효율적으로 관리한 경험이 있습니다.",
      ],
    },
    {
      name: "Supabase",
      icon: <SupabaseIcon />,
      contents: [
        "Supabase를 활용해 인증(Auth), 데이터베이스(PostgreSQL), 스토리지를 연동한 백엔드 환경을 구성한 경험이 있습니다.",
        "클라이언트와 직접 연동되는 API를 통해 빠르게 기능을 구현하고 프로토타입을 개발했습니다.",
      ],
    },
    {
      name: "Vercel",
      icon: <VercelIcon />,
      contents: [
        "Vercel로 프론트엔드 프로젝트를 배포하며 CI/CD 자동화 흐름을 경험했습니다.",
      ],
    },
  ],
};
