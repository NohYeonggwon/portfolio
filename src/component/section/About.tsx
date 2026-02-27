import { Sparkles } from "lucide-react";
import CoreStrengths from "../about/coreStr/CoreStrengths";
import Me from "../about/me/Me";
import SectionLayout from "../common/SectionLayout";

export default function About() {
  return (
    <>
      <SectionLayout
        icon={<Sparkles />}
        title="About Me"
        subTitle="저를 소개합니다!"
        bg="#F8FAFC"
      >
        {/* 내 소개 */}
        <Me />
        {/* 핵심 역량 */}
        <CoreStrengths />
      </SectionLayout>
    </>
  );
}
