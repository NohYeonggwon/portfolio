import Left from "./left/Left";
import Right from "./right/Right";

export default function Me() {
  return (
    <>
      <div className="flex gap-20">
        {/* Left */}
        <Left />
        {/* Right */}
        <Right />
      </div>
    </>
  );
}
