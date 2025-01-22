import React from 'react';

interface NavigationProps {
  setShowArtPortfolio?: (show: boolean) => void;
}

export function Navigation({ setShowArtPortfolio }: NavigationProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    if (setShowArtPortfolio) {
      setShowArtPortfolio(false);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={handleLogoClick}
            className="text-xl font-bold text-purple-600 hover:text-purple-700 transition-colors"
          >
            EP
          </button>
          <div className="flex gap-8">
            {setShowArtPortfolio ? (
              <button
                onClick={handleLogoClick}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Back to Home
              </button>
            ) : (
              ['about', 'skills', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-purple-600 transition-colors capitalize"
                >
                  {section}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}