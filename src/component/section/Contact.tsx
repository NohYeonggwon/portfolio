import { Mail } from "lucide-react";
import SectionLayout from "../common/SectionLayout";

export default function Contact() {
  return (
    <>
      <SectionLayout
        icon={<Mail />}
        title="Contact"
        subTitle={
          "읽어주셔서 감사합니다.\n궁금한 점이 있다면 편하게 연락주세요"
        }
        bg="#F8FAFC"
      >
        <div className="w-80 mx-auto">
          <div className="grid grid-cols-3 gap-2 text-lg bg-white px-8 py-6 rounded-xl border border-gray-200">
            <p className="font-semibold">이메일</p>
            <p className="col-span-2">skyt852@gmail.com</p>
            <p className="font-semibold">Git</p>
            <a
              className="underline col-span-2"
              href="https://github.com/NohYeonggwon"
            >
              @yeonggwon0616
            </a>
            <p className="font-semibold">인스타</p>
            <a
              className="underline col-span-2"
              href="https://www.instagram.com/0gwoi.no?igsh=MW1hbDVoa3JlbnplbQ=="
            >
              @0gwoi.no
            </a>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
