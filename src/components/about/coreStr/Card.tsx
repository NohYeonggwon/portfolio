import Image, { StaticImageData } from "next/image";

type CardType = {
  img: StaticImageData;
  title: string;
  contents: string;
};

export default function Card({ img, title, contents }: CardType) {
  return (
    <>
      <div className="flex-1 space-y-6">
        {img && (
          <Image
            src={img}
            alt={title}
            width={800}
            height={800}
            className="w-full h-70 rounded-2xl"
          />
        )}
        <div className="space-y-2">
          <p className="font-semibold text-xl text-[#4B66BE]">{title}</p>
          <p>{contents}</p>
        </div>
      </div>
    </>
  );
}
