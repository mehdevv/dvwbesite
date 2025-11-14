import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Events } from './components/Events';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { JoinUs } from './components/JoinUs';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ overflowX: 'hidden', width: '100%' }}>
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <Events />
      <Team />
      <JoinUs />
      <Contact />
      <Footer />
    </div>
  );
}
