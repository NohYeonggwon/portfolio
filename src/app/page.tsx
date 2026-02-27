import Header from "../section/Header";
import About from "../section/About";
import Main from "../section/Main";
import Experience from "../section/Experience";
import Skills from "../section/Skills";
import Project from "../section/Project";
import Contact from "../section/Contact";

export default function Page() {
  return (
    <>
      <div className="relative w-full h-auto">
        <Header />
        <Main />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Contact />
      </div>
    </>
  );
}
