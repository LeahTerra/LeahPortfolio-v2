import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Skills } from './components/skills';
import { Experience } from './components/experience';
import { Projects } from './components/projects';
import { Education } from './components/education';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Particles } from './components/ui/shadcn-io/particles'


export default function App() {

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-neutral-900`}>
      <Navigation />
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={25}
        staticity={100}
        color="#fb7186"
        size={2}
      />
      <Header />
      
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      
    </div>
  );
}
