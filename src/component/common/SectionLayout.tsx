import type { JSX, ReactNode } from "react";
import SectionTitle from "./SectionTitle";

type SectionLayoutType = {
  icon: JSX.Element;
  title: string;
  subTitle: string;
  bg: string;
  children: ReactNode;
};

export default function SectionLayout({
  icon,
  title,
  subTitle,
  bg,
  children,
}: SectionLayoutType) {
  return (
    <>
      <section
        id={title === "About Me" ? "About" : title}
        className={`w-full py-25`}
        style={{ backgroundColor: bg }}
      >
        <div className="max-w-330 px-15 mx-auto">
          <SectionTitle icon={icon} title={title} subTitle={subTitle} />
          <div className="mt-15 space-y-25">{children}</div>
        </div>
      </section>
    </>
  );
}
