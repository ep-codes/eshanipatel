import React from 'react';

export function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold text-purple-600">EP</span>
          <div className="flex gap-8">
            {['about', 'skills', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-600 hover:text-purple-600 transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}