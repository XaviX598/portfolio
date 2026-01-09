import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import BackendPing from "../components/BackendPing";


export default function Home() {
  return (
    <>
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
