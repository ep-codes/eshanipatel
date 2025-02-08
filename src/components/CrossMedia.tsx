import React, { useEffect } from 'react';
import { Navigation } from './Navigation';

interface CrossMediaProps {
  setShowCrossMedia: (show: boolean) => void;
}

export function CrossMedia({ setShowCrossMedia }: CrossMediaProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navigation setShowCrossMedia={setShowCrossMedia} />
      
      <main className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-10 animate-fadeIn">
            Cross Media Design Projects
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4 animate-slideUp animation-delay-200">
            A compilation of works including graphic design posters, concept sketches, moodboards, and contact sheets.
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
          <div className="aspect-[16/9] w-full">
            <embed
              src="/assets/pdfs/Concept_Sketching.pdf"
              type="application/pdf"
              className="w-full h-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}