import SkillItem from "./SkillItem";

export default function SkillList({ data }: { data: SkillData[] }) {
  return (
    <>
      {data.map((item, index) => (
        <SkillItem key={index} data={item} />
      ))}
    </>
  );
}
