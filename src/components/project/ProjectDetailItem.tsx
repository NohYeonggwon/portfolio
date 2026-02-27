export default function ProjectDetailItem({ content }: { content: string }) {
  return (
    <>
      <div className="flex gap-1">
        <span>-</span>
        <p className="ml-1">{content}</p>
      </div>
    </>
  );
}
