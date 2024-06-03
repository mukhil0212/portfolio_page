import About from "./components/About";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Sectiondivider from "./components/Section-divider";
const Page = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Sectiondivider />
      <About />
      <Projects />
    </main>
  );
};

export default Page;
