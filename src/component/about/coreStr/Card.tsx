type CardType = {
  img: string;
  title: string;
  contents: string;
};

export default function Card({ img, title, contents }: CardType) {
  return (
    <>
      <div className="flex-1 space-y-6">
        {img && (
          <img className="w-full h-70 rounded-2xl" src={img} alt={title} />
        )}
        <div className="space-y-2">
          <p className="font-semibold text-xl text-[#4B66BE]">{title}</p>
          <p>{contents}</p>
        </div>
      </div>
    </>
  );
}
