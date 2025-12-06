export default function Header() {
  return (
    <>
      <header className="z-50 sticky h-[70px] top-0 border-b bg-[#FBFBF4]">
        <div className="h-full px-50 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Noh Yeong Gwon</h1>
          <nav>
            <ul className="flex gap-8 text-xl font-semibold">
              <li>
                <a href="#About">About me</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#Experience">Experience</a>
              </li>
              <li>
                <a href="#Project">Project</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
