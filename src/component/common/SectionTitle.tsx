export default function SectionTitle({
  icon,
  title,
  subTitle,
}: SectionTitleType) {
  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-3 px-6 py-4 bg-[#4B66BE] text-white rounded-full">
          {icon}
          <span className="font-medium">{title}</span>
        </div>

        <h3 className="text-[40px] font-medium whitespace-pre-line text-center">
          {subTitle}
        </h3>
      </div>
    </>
  );
}
