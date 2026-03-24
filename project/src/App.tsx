import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AuthorsSection } from './components/AuthorsSection';
import { AbstractSection } from './components/AbstractSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TechStackSection } from './components/TechStackSection';
import { MethodologySection } from './components/MethodologySection';
import { ImpactSection } from './components/ImpactSection';
import { ChallengesSection } from './components/ChallengesSection';
import { ChatbotDemo } from './components/ChatbotDemo';
import { PublicationSection } from './components/PublicationSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-roboto">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <div id="team">
          <AuthorsSection />
        </div>
        <AbstractSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="technology">
          <TechStackSection />
        </div>
        <MethodologySection />
        <ImpactSection />
        <ChallengesSection />
        <div id="demo">
          <ChatbotDemo />
        </div>
        <div id="publication">
          <PublicationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
