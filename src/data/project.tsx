import FigmaIcon from "../component/icons/FigmaIcon";
import GithubIcon from "../component/icons/GithubIcon";
import IllustIcon from "../component/icons/IllustIcon";
import NextIcon from "../component/icons/NextIcon";
import PsIcon from "../component/icons/PsIcon";
import ReactIcon from "../component/icons/ReactIcon";
import SupabaseIcon from "../component/icons/SupabaseIcon";
import TailwindIcon from "../component/icons/TailwindIcon";
import TsIcon from "../component/icons/TsIcon";
import VercelIcon from "../component/icons/VercelIcon";
import VscodeIcon from "../component/icons/VscodeIcon";
import ZustandIcon from "../component/icons/ZustandIcon";
import Hanssem from "../img/web/Hanssem.png";
import HanssemMain from "../img/web/HanssemMain.jpg";
import Algo from "../img/web/Algo.png";
import AlgoMain from "../img/web/AlgoMain.jpg";
import StudyHub from "../img/web/StudyHub.png";
import StudyHubMain from "../img/web/StudyHubMain.jpg";
import NotionClone from "../img/web/NotionClone.png";
import NotionCloneMain from "../img/web/NotionCloneMain.jpg";
import JsIcon from "../component/icons/JsIcon";
import HtmlIcon from "../component/icons/HtmlIcon";
import CssIcon from "../component/icons/CssIcon";
import AdobeXDIcon from "../component/icons/AdobeXDIcon";
import TanstackIcon from "../component/icons/TanstackIcon";

export const ProjectData: Record<ActiveTabType, Project[]> = {
  Web: [
    {
      id: "Algo",
      logo: Algo,
      title: "Algo",
      period: "2025.10.27 ~ 11.20",
      mainTech: <NextIcon />,
      role: "팀원",
      shortDescription: "Next.js 기반 커뮤니티 플랫폼",
      definition:
        "ChatGPT뿐만 아니라 Gemini 프롬프트도 공유할 수 있고 소셜 커뮤니티 기능이 핵심이 되는 AI 프롬프트 공유 및 소셜 커뮤니티 플랫폼입니다.",
      techStack: [
        <NextIcon />,
        <ReactIcon />,
        <TsIcon />,
        <TailwindIcon />,
        <TanstackIcon />,
        <VscodeIcon />,
        <SupabaseIcon />,
        <FigmaIcon />,
        <GithubIcon />,
        <VercelIcon />,
      ],
      detail: {
        members: "4(FE)",
        site: {
          demo: "https://fe7-project3-team-4.vercel.app/",
          git: "https://github.com/prgrms-fe-devcourse/fe7-project3-team-4",
          figma:
            "https://www.figma.com/design/fGa7xT2uQIWPAp6n9t7ZYi/Team04_-3%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-4DX?node-id=0-1&t=sMYyJyxVY905ltQ7-1",
        },
        siteMainImg: AlgoMain,
        contents: {
          first: [
            "ChatGPT뿐만 아니라 Gemini 프롬프트도 공유할 수 있고 소셜 커뮤니티 기능이 핵심이 되는 AI 프롬프트 공유 및 소셜 커뮤니티 플랫폼입니다.",
          ],
          second: [
            "전체 페이지 디자인 및 UI 컴포넌트 구조 설계",
            "데스크탑·모바일 반응형 퍼블리싱 구현",
            "Supabase 기반 게시글 CRUD 기능 개발",
            "전체 서비스 다크 모드 적용 및 상태 관리 구축",
          ],
          third: [
            `Next.js App Router + dynamic = "force-dynamic" + Suspense를 사용해 글쓰기 페이지를 구성하고, 서버에서 사용자·해시태그를 미리 불러온 뒤 클라이언트 폼 컴포넌트로 넘기도록 분리함`,
            "Supabase를 이용해 게시글 CRUD를 구현하고, 메인 이미지·프롬프트 결과 이미지는 Supabase Storage에 업로드한 뒤, 본문은 JSON(doc) 형태로 확장 가능한 구조로 저장함",
            `React Query의 invalidateQueries(["posts"])로 작성/수정 후 목록 캐시를 무효화해, 새로고침 없이도 최신 게시글 목록이 보이도록 상태를 동기화함`,
            "Tailwind CSS 기반으로 데스크탑·모바일 반응형 퍼블리싱을 구현하고, html에 dark 클래스를 토글하는 방식의 다크 모드 테마를 적용함",
          ],
          fourth: [
            [
              "Supabase의 delete 요청이 204로 성공처럼 응답되지만, 실제 DB에서는 게시글이 삭제되지 않음.",
            ],
            [
              "RLS 정책과 where 조건 때문에 현재 유저가 접근 가능한 삭제 대상 row가 0개였고, Supabase는 이 경우에도 에러 없이 204를 반환하여 클라이언트에서는 삭제된 것처럼 보임.",
              "삭제가 정상적으로 이루어진 경우에도 클라이언트 캐시·상태가 갱신되지 않아 목록 화면에 기존 데이터가 남아 있었음.",
            ],
            [
              "게시글·댓글에 대해 “누가 어떤 조건에서 삭제할 수 있는지”를 명확하게 다시 정의하고, RLS 정책을 FK + EXISTS 기반으로 재작성함.",
              `delete({ count: "exact" })를 사용해 실제 삭제된 row 수를 확인하도록 변경함.`,
              "삭제 후 router.refresh()로 서버 데이터를 다시 불러오도록 하여 UI 상태를 즉시 갱신함.",
            ],
            [
              "삭제 동작이 UI와 DB 모두에서 일관되게 작동하며, 실제 삭제 실패 시에도 원인을 바로 파악할 수 있는 구조로 개선됨.",
            ],
          ],
          fifth: [
            "App Router와 서버 컴포넌트 구조를 직접 적용하면서, 서버에서 처리할 로직과 클라이언트 폼 로직을 어떻게 분리할지에 대한 감각을 얻게 됨",
            "Supabase RLS 정책과 실제 쿼리 동작 사이의 차이를 겪으면서, 권한·정책 설계가 CRUD 기능의 핵심이라는 점을 체감함",
            "개선 방향으로는 게시글·댓글 기능에 대해 e2e 혹은 통합 테스트를 적용해 배포 전 기본 동작을 자동으로 검증하지 못한 점이 아쉬워, 이후에는 해당 테스트 체계를 도입해 안정성을 강화해보고 싶다.",
          ],
        },
      },
    },
    {
      id: "StudyHub",
      logo: StudyHub,
      title: "StudyHub",
      period: "2025.10.02 ~ 10.24",
      mainTech: <ReactIcon />,
      role: "팀장",
      shortDescription: "React 기반 커뮤니티 플랫폼",
      definition:
        "학생+선생님/학부모 참여형 문제 공유 및 풀이 커뮤니티 플랫폼 (초~고) / 정보 공유 및 참여형 플랫폼입니다.",
      techStack: [
        <ReactIcon />,
        <TsIcon />,
        <TailwindIcon />,
        <ZustandIcon />,
        <VscodeIcon />,
        <SupabaseIcon />,
        <FigmaIcon />,
        <GithubIcon />,
        <VercelIcon />,
      ],
      detail: {
        members: "4(FE)",
        site: {
          demo: "https://fe-7-project-2-team-5.vercel.app/",
          git: "https://github.com/prgrms-fe-devcourse/FE7-PROJECT2-TEAM-5",
          figma:
            "https://www.figma.com/design/Kuu4TVUKRsM1VzZhPTHOto/Team05_2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&t=zEEVC0B7ToTUU2n2-1",
        },
        siteMainImg: StudyHubMain,
        contents: {
          first: [
            "학생+선생님/학부모 참여형 문제 공유 및 풀이 커뮤니티 플랫폼 (초~고) / 정보 공유 및 참여형 플랫폼입니다.",
          ],
          second: [
            "팀에서 팀장으로 일정 관리, 기능 우선순위 정의, 코드 리뷰를 주도하며 전체 개발 방향을 조율",
            "디자인 & 퍼블리싱을 담당하여 Figma 와이어프레임 기반으로 메인 레이아웃, 공통 컴포넌트, 반응형 UI 구조 설계",
            "프로필 페이지 전반을 담당해 레이아웃 구성 및 본인/타인 프로필 분기 처리",
            "유저 리스트 & 실시간 접속 패널과 팔로우 기능을 설계·구현하여 커뮤니티형 서비스의 핵심 소셜 기능 구축",
          ],
          third: [
            "React + TypeScript로 프로필/유저 리스트/팔로우 로직을 컴포넌트 단위로 분리하고, 공통 타입 정의로 타입 안정성 확보",
            "Zustand + Immer로 인증 유저 정보, 프로필 데이터, 팔로우 목록, 온라인 사용자 리스트를 전역 상태로 관리하여 여러 페이지 간 데이터 일관성 유지",
            "Supabase를 활용해 프로필/팔로우 정보는 DB에서 비동기 fetch를 이용하고 온라인 사용자 리스트는 Realtime 기반으로 접속/퇴장 이벤트를 받아 상태 갱신",
            "Tailwind CSS로 ProfilePage의 2-컬럼 레이아웃, 하단 고정 패널, 슬라이드 업/다운 애니메이션 등을 유틸리티 클래스로 구현",
          ],
          fourth: [
            [
              "팔로우 버튼 클릭 후에도 내 친구(Friends 탭) 목록과 사용자 리스트에 즉시 반영되지 않고, 새로고침해야만 갱신되는 이슈 발생",
            ],
            [
              "팔로우/언팔 요청 이후, 화면에 보여지는 팔로잉/팔로워 목록을 다시 불러오지 않고 초기 마운트 시점 데이터만 사용하고 있었음",
            ],
            [
              "팔로우/언팔 API 호출이 성공하면 Supabase에서 최신 팔로우 데이터 재조회 후 해당 값을 Zustand 전역 상태에 즉시 반영하도록 로직 수정 ",
              "동시에 UI는 전역 상태를 기준으로 렌더링하게 변경하여, 프로필 페이지와 하단 사용자 리스트가 새로고침 없이도 동일한 최신 팔로우 정보를 공유하도록 개선",
            ],
            [
              "팔로우/언팔 행동 직후 Friends 탭, 프로필 팔로워/팔로잉 수, 사용자 리스트의 버튼 상태가 동시에 갱신",
              "실시간성·일관성이 중요한 소셜 기능에서 UX를 크게 향상",
            ],
          ],
          fifth: [
            "실시간 기능과 전역 상태 관리를 구현하며 데이터의 단일 출처와 초기 설계의 중요성을 체감함.",
            "팀장으로서 기능 우선순위와 공통 컴포넌트 구조를 초기에 정리하는 것이 협업 효율에 큰 영향을 준다는 점을 배움.",
            "앞으로는 팔로우·DM 등 소셜 기능을 모듈화·추상화하여 재사용성과 확장성을 높이는 방향으로 개선할 계획.",
          ],
        },
      },
    },
    {
      id: "Notion",
      logo: NotionClone,
      title: "Notion Clone",
      period: "2025.09.02 ~ 09.04",
      mainTech: <JsIcon />,
      role: "팀장",
      shortDescription: "바닐라 JS 기반 문서 관리 사이트",
      definition:
        "직관적인 트리 구조로 문서를 작성하고 관리할 수 있는 웹 기반 메모/문서 관리 서비스입니다.",
      techStack: [
        <JsIcon />,
        <HtmlIcon />,
        <CssIcon />,
        <VscodeIcon />,
        <FigmaIcon />,
        <GithubIcon />,
      ],
      detail: {
        members: "2(FE)",
        site: {
          demo: "https://prgrms-fe-devcourse.github.io/FE7-PROJECT1-TEAM02/",
          git: "https://github.com/prgrms-fe-devcourse/FE7-PROJECT1-TEAM02",
          figma:
            "https://www.figma.com/design/VvBKMyCxXVRH6VXRUSkXeY/Team02_1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&t=Z91KIfQVvTP3Zw51-1",
        },
        siteMainImg: NotionCloneMain,
        contents: {
          first: [
            "직관적인 트리 구조로 문서를 작성하고 관리할 수 있는 웹 기반 메모/문서 관리 서비스입니다.",
          ],
          second: [
            "팀에서 팀장으로서 일정 관리, 작업 분배, 코드 리뷰를 주도하며 전체 개발 흐름을 조율",
            "프로젝트 기획을 담당하여 목적·핵심 기능 정의, 문서 트리 구조 설계, 전체 서비스 흐름을 설계",
            "디자인 역할로 기본 레이아웃과 사이드바·에디터 중심의 UI/UX 구성 방향을 정립",
            "사이드바 트리 구조(문서 생성·삭제·토글)와 삭제 후 트리 자동 갱신 기능 등 기능 개발을 수행",
          ],
          third: [
            "renderTree 재귀 함수를 활용해 문서 트리를 동적으로 렌더링하고, 생성·삭제 후 즉시 loadTree()로 UI를 갱신",
            ".resizer 드래그 이벤트를 통해 사이드바 너비 조절 기능을 구현하여 사용자 편의성 향상",
            "검색 팝업에서 문서 트리를 평탄화하여 제목 기반 문서 검색 및 즉시 이동 기능 구현",
            "doc:title-change 커스텀 이벤트와 다크 모드 토글을 적용해 사이드바 제목 실시간 반영 및 사용자 환경 유지 기능 제공",
          ],
          fourth: [
            [
              "문서를 삭제했을 때, 서버에서는 삭제되었지만 트리 UI가 즉시 반영되지 않는 문제가 발생함.",
            ],
            [
              "삭제 요청은 정상적으로 처리되었으나, 삭제 후 트리를 다시 렌더링하는 로직이 없어 UI에는 기존 데이터가 남아 있는 상태가 유지됨.",
            ],
            [
              "삭제 요청 성공 후 즉시 loadTree()를 호출하여 트리 전체를 다시 불러오도록 수정",
              "트리 렌더링 함수를 재귀 구조로 정리해 새 트리 데이터를 정확하게 반영되도록 리팩토링",
            ],
            [
              "삭제 직후 UI와 서버 데이터가 항상 동일하게 유지",
              "트리 UI 동기화 문제 해결로 문서 탐색 흐름이 자연스럽게 개선",
              "사용자 경험(UX)이 크게 향상됨",
            ],
          ],
          fifth: [
            "인원은 적지만, 제대로 된 협업을 시작하면서 Git 사용 능력에 대해 크게 향상",
            "트리·라우팅·자동 저장 등 여러 기능이 얽힌 프로젝트에서는 상태 동기화 흐름을 먼저 정의하는 것이 중요함을 학습",
            "공통 기능을 모듈화해 두면 재사용성과 유지보수성이 크게 좋아짐을 경험",
            "향후에는 문서 생성·수정·삭제 로직을 하나의 Document Service 레이어로 통합해 구조적 완성도를 높이고자 함",
          ],
        },
      },
    },
    {
      id: "HANSSEM",
      logo: Hanssem,
      title: "HANSSEM",
      period: "2023.09 ~ 10",
      mainTech: <JsIcon />,
      role: "개인",
      shortDescription: "HANSSEM 리빌딩 사이트",
      definition:
        "기업 홈페이지와 한샘몰이 분리되어 있어 사용자 경험에 비효율적이라고 판단했고, 이를 하나의 통합 사이트로 기획했습니다.",
      techStack: [
        <JsIcon />,
        <HtmlIcon />,
        <CssIcon />,
        <VscodeIcon />,
        <PsIcon />,
        <IllustIcon />,
        <AdobeXDIcon />,
      ],
      detail: {
        members: "1",
        site: {
          demo: "https://nohyeonggwon.github.io/Hanssem/",
          git: "https://github.com/NohYeonggwon/Hanssem",
          figma: "",
        },
        siteMainImg: HanssemMain,
        contents: {
          first: [""],
          second: [""],
          third: [""],
          fourth: [[""], [""], [""], [""]],
          fifth: [""],
        },
      },
    },
  ],
  Design: [
    {
      id: "제품 이름",
      logo: StudyHub,
      title: "제품 이름",
      period: "2025.10.02 ~ 10.24",
      shortDescription: "어떤 용도 제품",
      definition: "제품 상세 페이지",
      colors: ["#D9D9D9"],
      techStack: [<PsIcon />, <IllustIcon />],
    },
  ],
};
