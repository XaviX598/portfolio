import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import BackendPing from "../components/BackendPing";


export default function Home() {
  return (
    <>
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
      <BackendPing />
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
