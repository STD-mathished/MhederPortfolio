import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TimelineSection from "./components/timelineSection";
import StackSection from "./components/stackSection";
import ProjectsSection from "./components/projectsSection";
import FreelanceSection from "./components/freelanceSection";
import FooterSection from "./components/footerSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TimelineSection />
        <StackSection />
        <ProjectsSection />
        <FreelanceSection />
      </main>
      <FooterSection />
    </>
  );
}
