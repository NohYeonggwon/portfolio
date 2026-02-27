type AboutMeType = {
  title: string;
  contents: string;
};

export default function AboutMe({ title, contents }: AboutMeType) {
  return (
    <>
      <div className="space-y-3">
        <p className="font-bold text-2xl">{title}</p>
        <p className="font-medium text-lg whitespace-pre-line">{contents}</p>
      </div>
    </>
  );
}
