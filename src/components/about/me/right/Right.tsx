import { Download } from "lucide-react";
import myPhoto from "@/public/img/about/myPhoto.jpg";
import Image from "next/image";

export default function Right() {
  return (
    <>
      <div className="flex-none flex flex-col gap-6 items-center">
        <Image
          src={myPhoto}
          alt="myPhoto"
          width={800}
          height={800}
          className="w-75 h-75 rounded-full"
        ></Image>
        <div className=" bg-gray-200 rounded-lg text-gray-500 hover:bg-gray-500 hover:text-white">
          <a
            className="flex items-center gap-2 px-3 py-2"
            href="/resume.pdf"
            download
          >
            <span className="text-sm">이력서 다운로드</span> <Download />
          </a>
        </div>
      </div>
    </>
  );
}
