import About from "./section/About";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Footer from "./section/Footer";
import Header from "./section/Header";
import Main from "./section/Main";
import Project from "./section/Project";
import Skills from "./section/Skills";

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
        <Footer />
      </div>
    </>
  );
}
