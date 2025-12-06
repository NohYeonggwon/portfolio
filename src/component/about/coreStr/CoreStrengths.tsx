import StrengthCards from "./StrengthCards";

export default function CoreStrengths() {
  return (
    <>
      <div className="space-y-15">
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-[#4B66BE] text-2xl font-medium">핵심 역량</h4>
          <h5 className="text-[32px] font-medium">
            유연하게 소통하고 견고하게 개발합니다.
          </h5>
        </div>
        <div className="flex gap-8">
          <StrengthCards />
        </div>
      </div>
    </>
  );
}
