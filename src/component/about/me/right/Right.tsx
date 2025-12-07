import { Download } from "lucide-react";
import myPhoto from "../../../../img/about/myPhoto.jpg";

export default function Right() {
  return (
    <>
      <div className="flex-none flex flex-col gap-6 items-center">
        <img className="w-75 h-75 rounded-full" src={myPhoto} alt="me" />
        <a href="" download className="flex">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-200 rounded-lg text-gray-500 hover:bg-gray-500 hover:text-white">
            <span className="text-sm">이력서 다운로드</span> <Download />
          </div>
        </a>
      </div>
    </>
  );
}
