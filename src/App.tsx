import About from "./component/section/About";
import Contact from "./component/section/Contact";
import Experience from "./component/section/Experience";
import Header from "./component/section/Header";
import Main from "./component/section/Main";
import Project from "./component/section/Project";
import Skills from "./component/section/Skills";

export default function App() {
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
