import { Mail } from "lucide-react";
import SectionLayout from "../component/common/SectionLayout";

export default function Contact() {
  return (
    <>
      <SectionLayout
        icon={<Mail />}
        title="Contact"
        subTitle="감사합니다 궁금한 점이 있다면 편하게 연락주세요"
        bg="#F5F5F0"
      >
        1
      </SectionLayout>
    </>
  );
}
