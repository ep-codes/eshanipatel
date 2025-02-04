import React from 'react';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ArtPortfolio } from './components/ArtPortfolio';
import { CrossMedia } from './components/CrossMedia';
import { NightWatch } from './components/NightWatch';

function App() {
  const [showArtPortfolio, setShowArtPortfolio] = React.useState(false);
  const [showCrossMedia, setShowCrossMedia] = React.useState(false);
  const [showNightWatch, setShowNightWatch] = React.useState(false);

  if (showArtPortfolio) {
    return <ArtPortfolio setShowArtPortfolio={setShowArtPortfolio} />;
  }

  if (showCrossMedia) {
    return <CrossMedia setShowCrossMedia={setShowCrossMedia} />;
  }

  if (showNightWatch) {
    return <NightWatch setShowNightWatch={setShowNightWatch} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-16">
      <Navigation />
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects 
          setShowArtPortfolio={setShowArtPortfolio} 
          setShowCrossMedia={setShowCrossMedia}
          setShowNightWatch={setShowNightWatch}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App