import NavBar from "./components/NavBar.tsx";
import HeroSection from "./sections/HeroSection.tsx"
import ProjectsSection from "./sections/ProjectsSection.tsx";
import AboutSection from "./sections/AboutSection.tsx";

function App() {
  return (
    <>
        <NavBar />
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
    </>
  )
}

export default App
