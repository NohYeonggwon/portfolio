import Card from "./Card";
import cont1 from "@/public/img/about/cont1.png";
import cont2 from "@/public/img/about/cont2.png";
import cont3 from "@/public/img/about/cont3.png";

export default function StrengthCards() {
  return (
    <>
      <Card
        img={cont1}
        title="디자인 감각을 갖춘 프론트엔드 개발자"
        contents="UI 구성과 인터랙션의 흐름을 이해하고 있으며, 디자인 의도를 코드로 자연스럽게 구현할 수 있습니다. Figma 기반의 컴포넌트 구조를 해석하고, 시각적인 디테일을 반영한 실제 화면 개발 경험이 있습니다."
      />
      <Card
        img={cont2}
        title="모던 웹 환경에 최적화된 프론트엔드 개발 역량"
        contents="React.js와 Next.js를 활용한 개발 경험을 보유하고 있으며, TypeScript 기반 프로젝트에서 안정적인 코드 작성에 강점이 있습니다. 컴포넌트 기반 설계, 상태 관리, API 연동 등 프론트엔드 핵심 기술 전반에 익숙합니다."
      />
      <Card
        img={cont3}
        title="협업 중심의 문제 해결 & 명확한 커뮤니케이션"
        contents="문제 상황을 구조적으로 파악하고 해결 방안을 논리적으로 제안하는 데 익숙합니다. 기획·디자인 팀과의 협업 경험을 통해 요구사항을 명확하게 파악하고, 개발 관점에서의 대안을 제시하는 커뮤니케이션 능력을 갖추고 있습니다."
      />
    </>
  );
}
