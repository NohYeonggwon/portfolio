import { Sparkles } from "lucide-react";
import CoreStrengths from "../components/about/coreStr/CoreStrengths";
import Me from "../components/about/me/Me";
import SectionLayout from "../components/common/SectionLayout";

export default function About() {
  return (
    <>
      <SectionLayout
        icon={<Sparkles />}
        title="About Me"
        subTitle="저를 소개합니다!"
        bg="#F5F5F0"
      >
        {/* 내 소개 */}
        <Me />
        {/* 핵심 역량 */}
        <CoreStrengths />
      </SectionLayout>
    </>
  );
}
