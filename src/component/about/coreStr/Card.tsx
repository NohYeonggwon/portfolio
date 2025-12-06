type CardType = {
  title: string;
  contents: string;
};

export default function Card({ title, contents }: CardType) {
  return (
    <>
      <div className="space-y-6">
        <img className="w-full h-70 rounded-2xl bg-amber-200" src="" alt="" />
        <div className="space-y-2">
          <p className="font-semibold text-xl text-[#4B66BE]">{title}</p>
          <p>{contents}</p>
        </div>
      </div>
    </>
  );
}
