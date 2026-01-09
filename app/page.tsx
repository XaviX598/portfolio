import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <>
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
