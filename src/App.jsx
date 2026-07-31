import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import PageLoader from './components/PageLoader.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Education from './sections/Education.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import CurrentlyWorkingOn from './sections/CurrentlyWorkingOn.jsx'
import GitHubStats from './sections/GitHubStats.jsx'
import Experience from './sections/Experience.jsx'
import Achievements from './sections/Achievements.jsx'
import ResumeSection from './sections/ResumeSection.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CurrentlyWorkingOn />
        <GitHubStats />
        <Experience />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
