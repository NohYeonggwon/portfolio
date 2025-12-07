type StrengthType = {
  title: string;
  contents: string;
};

export default function Strength({ title, contents }: StrengthType) {
  return (
    <>
      <div className="space-y-1">
        <p className="text-lg font-semibold text-[#4B66BE]">📌 {title}</p>
        <p className="font-medium break-normal text-lg">{contents}</p>
      </div>
    </>
  );
}
