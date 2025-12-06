import FigmaIcon from "../component/icons/FigmaIcon";
import GithubIcon from "../component/icons/GithubIcon";
import NextIcon from "../component/icons/NextIcon";
import ReactIcon from "../component/icons/ReactIcon";
import SupabaseIcon from "../component/icons/SupabaseIcon";
import TailwindIcon from "../component/icons/TailwindIcon";
import TsIcon from "../component/icons/TsIcon";
import VercelIcon from "../component/icons/VercelIcon";
import VscodeIcon from "../component/icons/VscodeIcon";
import ZustandIcon from "../component/icons/ZustandIcon";
import Algo from "../img/Algo.png";
import StudyHub from "../img/StudyHub.png";

export const ProjectData: Record<ActiveTabType, Project[]> = {
  Web: [
    {
      id: "Algo",
      logo: Algo,
      title: "Algo",
      period: "2025.10.27 ~ 11.20",
      mainTech: <NextIcon />,
      shortDescription: "Next.js 기반 커뮤니티 플랫폼",
      definition:
        "ChatGPT뿐만 아니라 Gemini 프롬프트도 공유할 수 있고 소셜 커뮤니티 기능이 핵심이 되는 AI 프롬프트 공유 및 소셜 커뮤니티 플랫폼입니다.",
      techStack: [
        <NextIcon />,
        <ReactIcon />,
        <TsIcon />,
        <TailwindIcon />,
        <VscodeIcon />,
        <SupabaseIcon />,
        <FigmaIcon />,
        <GithubIcon />,
        <VercelIcon />,
      ],
    },
    {
      id: "StudyHub",
      logo: StudyHub,
      title: "StudyHub",
      period: "2025.10.02 ~ 10.24",
      mainTech: <ReactIcon />,
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
    },
  ],
  Design: [],
};
